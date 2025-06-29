import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../app.module';
import { Szemely } from '../entities/szemely.entity';
import { Cim } from '../entities/cim.entity';
import request from 'supertest';
import { JwtService } from '@nestjs/jwt';

describe('SzemelyController (integrációs tesztek)', () => {
  let app: INestApplication;
  let jwtService: JwtService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Szemely, Cim],
          synchronize: true,
          logging: false,
        }),
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    jwtService = moduleFixture.get<JwtService>(JwtService);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // 1. Admin felhasználó létrehozása nem védett végponton
  it('Létrehoz egy admin felhasználót a nem védett /register végponton', async () => {
    const adminDto = {
      szemely_vezeteknev: 'Kovács',
      szemely_keresztnev: 'János',
      szemely_szuletesi_datum: null,
      szemely_anyja_neve: null,
      szemely_vegzettseg: 'felsőfok',
      szemely_email: 'kovacs.janos@example.com',
      szemely_telefon: null,
      szemely_felhasznalonev: 'kovacsj',
      szemely_jelszo: 'jelszo123',
      szemely_jogosultsag: 'admin',
      szemely_cimek: [
        {
          cim_varos: 'Budapest',
          cim_utca: 'Fő utca 1',
          cim_iranyitoszam: '1221',
          cim_tipus: 'állandó',
        },
      ],
    };

    const response = await request(app.getHttpServer())
      .post('/szemelyek/register')
      .send(adminDto)
      .expect(201);

    expect(response.body).toMatchObject({
      szemely_id: 1,
      szemely_felhasznalonev: 'kovacsj',
      szemely_jogosultsag: 'admin',
    });

    const dbCimek = await app.get('CimRepository').find();
    expect(dbCimek).toHaveLength(1);
    expect(dbCimek[0]).toMatchObject({
      cim_varos: 'Budapest',
      cim_utca: 'Fő utca 1',
      cim_iranyitoszam: '1221',
      cim_tipus: 'állandó',
    });
  });

  // 2. User felhasználó létrehozása védett végponton admin tokennel
  it('Létrehoz egy user felhasználót a védett végponton admin tokennel', async () => {
    const userDto = {
      szemely_vezeteknev: 'Teszt',
      szemely_keresztnev: 'Elek',
      szemely_szuletesi_datum: '1980-01-01T00:00:00.000Z',
      szemely_anyja_neve: 'Kiss Anna',
      szemely_vegzettseg: 'középfok',
      szemely_email: 'teszt.elek@example.com',
      szemely_telefon: '+36309876543',
      szemely_felhasznalonev: 'teszte',
      szemely_jelszo: 'jelszo456',
      szemely_jogosultsag: 'user',
      szemely_cimek: [],
    };

    const adminToken = jwtService.sign({ sub: 1 });

    const response = await request(app.getHttpServer())
      .post('/szemelyek')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(userDto)
      .expect(201);

    expect(response.body).toMatchObject({
      szemely_id: 2,
      szemely_felhasznalonev: 'teszte',
      szemely_jogosultsag: 'user',
    });
  });

  // 3. Nincs jogosultságú felhasználó létrehozása admin tokennel
  it('Létrehoz egy nincs jogosultságú felhasználót a védett végponton admin tokennel', async () => {
    const noRoleDto = {
      szemely_vezeteknev: 'Kiss',
      szemely_keresztnev: 'Mária',
      szemely_szuletesi_datum: '1990-01-01T00:00:00.000Z',
      szemely_anyja_neve: 'Tóth Éva',
      szemely_vegzettseg: 'alapfok',
      szemely_email: 'kiss.maria@example.com',
      szemely_telefon: '+36301234567',
      szemely_felhasznalonev: 'kissm',
      szemely_jelszo: 'jelszo789',
      szemely_jogosultsag: 'nincs',
      szemely_cimek: [],
    };

    const adminToken = jwtService.sign({ sub: 1 });

    const response = await request(app.getHttpServer())
      .post('/szemelyek')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(noRoleDto)
      .expect(201);

    expect(response.body).toMatchObject({
      szemely_id: 3,
      szemely_felhasznalonev: 'kissm',
      szemely_jogosultsag: 'nincs',
    });
  });

  // 4. Ütközés tesztelése admin tokennel
  it('Hibaüzenetet ad ütköző felhasználónév esetén admin tokennel', async () => {
    const conflictDto = {
      szemely_vezeteknev: 'Teszt',
      szemely_keresztnev: 'Elek',
      szemely_szuletesi_datum: '1980-01-01T00:00:00.000Z',
      szemely_anyja_neve: 'Kiss Anna',
      szemely_vegzettseg: 'középfok',
      szemely_email: 'teszt.elek2@example.com',
      szemely_telefon: '+36309876543',
      szemely_felhasznalonev: 'kovacsj',
      szemely_jelszo: 'jelszo456',
      szemely_jogosultsag: 'user',
      szemely_cimek: [],
    };

    const adminToken = jwtService.sign({ sub: 1 });

    const response = await request(app.getHttpServer())
      .post('/szemelyek')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(conflictDto)
      .expect(400);

    expect(response.body).toMatchObject({
      statusCode: 400,
      message: 'A felhasználónév már létezik.',
      error: 'Bad Request',
    });
  });

  // 5. Hiányos adatok tesztelése admin tokennel
  it('Hibaüzenetet ad hiányos adatok esetén admin tokennel', async () => {
    const invalidDto = {
      szemely_keresztnev: 'János',
      szemely_szuletesi_datum: null,
      szemely_anyja_neve: null,
      szemely_vegzettseg: 'felsőfok',
      szemely_email: 'kovacs.janos3@example.com',
      szemely_telefon: null,
      szemely_felhasznalonev: 'kovacsj3',
      szemely_jelszo: 'jelszo123',
      szemely_jogosultsag: 'nincs',
      szemely_cimek: [],
    };

    const adminToken = jwtService.sign({ sub: 1 });

    const response = await request(app.getHttpServer())
      .post('/szemelyek')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(invalidDto)
      .expect(400);

    expect(response.body).toMatchObject({
      statusCode: 400,
      message: expect.arrayContaining([expect.stringContaining('A vezetéknév kötelező')]),
      error: 'Bad Request',
    });
  });

  // 6. Felhasználó rögzítése user tokennel
  it('Hibaüzenetet ad, ha user jogosultságú tokennel próbálunk létrehozni', async () => {
    const userDto = {
      szemely_vezeteknev: 'Próba',
      szemely_keresztnev: 'Péter',
      szemely_szuletesi_datum: '1985-01-01T00:00:00.000Z',
      szemely_anyja_neve: 'Szabó Klára',
      szemely_vegzettseg: 'középfok',
      szemely_email: 'proba.peter@example.com',
      szemely_telefon: '+36307654321',
      szemely_felhasznalonev: 'probap',
      szemely_jelszo: 'jelszo999',
      szemely_jogosultsag: 'nincs',
      szemely_cimek: [],
    };

    const userToken = jwtService.sign({ sub: 2 });

    const response = await request(app.getHttpServer())
      .post('/szemelyek')
      .set('Authorization', `Bearer ${userToken}`)
      .send(userDto)
      .expect(403);

    expect(response.body).toMatchObject({
      statusCode: 403,
      message: 'Forbidden resource',
    });
  });

  // 6.1. Felhasználó rögzítése nincs jogosultságú tokennel
  it('Hibaüzenetet ad, ha nincs jogosultságú tokennel próbálunk létrehozni', async () => {
    const userDto = {
      szemely_vezeteknev: 'Próba',
      szemely_keresztnev: 'Péter',
      szemely_szuletesi_datum: '1985-01-01T00:00:00.000Z',
      szemely_anyja_neve: 'Szabó Klára',
      szemely_vegzettseg: 'középfok',
      szemely_email: 'proba.peter@example.com',
      szemely_telefon: '+36307654321',
      szemely_felhasznalonev: 'probap',
      szemely_jelszo: 'jelszo999',
      szemely_jogosultsag: 'nincs',
      szemely_cimek: [],
    };

    const userToken = jwtService.sign({ sub: 3 });

    const response = await request(app.getHttpServer())
      .post('/szemelyek')
      .set('Authorization', `Bearer ${userToken}`)
      .send(userDto)
      .expect(403);

    expect(response.body).toMatchObject({
      statusCode: 403,
      message: 'Forbidden resource',
    });
  });

  // 7. Minden felhasználó lekérdezése admin tokennel
  it('Lekérdezi az összes felhasználót admin tokennel', async () => {
    const adminToken = jwtService.sign({ sub: 1 });

    const response = await request(app.getHttpServer())
      .get('/szemelyek')
      .set('Authorization', `Bearer ${adminToken}`)
      .expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ szemely_felhasznalonev: 'kovacsj', szemely_jogosultsag: 'admin' }),
        expect.objectContaining({ szemely_felhasznalonev: 'teszte', szemely_jogosultsag: 'user' }),
        expect.objectContaining({ szemely_felhasznalonev: 'kissm', szemely_jogosultsag: 'nincs' }),
      ]),
    );
  });

  // 8. Minden felhasználó lekérdezése user tokennel
  it('Lekérdezi az összes felhasználót user tokennel', async () => {
    const userToken = jwtService.sign({ sub: 2 });

    const response = await request(app.getHttpServer())
      .get('/szemelyek')
      .set('Authorization', `Bearer ${userToken}`)
      .expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ szemely_felhasznalonev: 'kovacsj', szemely_jogosultsag: 'admin' }),
        expect.objectContaining({ szemely_felhasznalonev: 'teszte', szemely_jogosultsag: 'user' }),
        expect.objectContaining({ szemely_felhasznalonev: 'kissm', szemely_jogosultsag: 'nincs' }),
      ]),
    );
  });

  // 9. Minden felhasználó lekérdezése nincs jogosultságú tokennel
  it('Lekérdezi az összes felhasználót nincs jogosultságú tokennel', async () => {
    const noRoleToken = jwtService.sign({ sub: 3 });

    const response = await request(app.getHttpServer())
      .get('/szemelyek')
      .set('Authorization', `Bearer ${noRoleToken}`)
      .expect(403);

    expect(response.body).toMatchObject({
      statusCode: 403,
      message: 'Forbidden resource',
    });

    if (response.status !== 200) {
      console.log('Hiba részletei:', response.body);
    }
  });

  // Meglévő validációs tesztek
  it('Teszteli az egyszerű validációt', async () => {
    const invalidTestDto = {};

    const response = await request(app.getHttpServer())
      .post('/szemelyek/test-validation')
      .send(invalidTestDto)
      .expect(400);

    expect(response.body).toMatchObject({
      statusCode: 400,
      message: expect.arrayContaining([expect.stringContaining('A név kötelező')]),
      error: 'Bad Request',
    });
  });

  it('Teszteli az egyszerű validációt érvényes bemenettel', async () => {
    const validTestDto = { name: 'Teszt Név' };

    const response = await request(app.getHttpServer())
      .post('/szemelyek/test-validation')
      .send(validTestDto)
      .expect(201);

    expect(response.body).toMatchObject({
      message: 'Validáció sikeres',
      data: { name: 'Teszt Név' },
    });
  });
});