import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, QueryFailedError } from "typeorm";
import { Hir } from "../entities/hir.entity";
import { Esemeny } from "../entities/esemeny.entity";
import { Szemely } from "../entities/szemely.entity";
import { Cim } from "../entities/cim.entity";
import { Telepules } from "../entities/telepules.entity";
import { Feliratkozas } from "../entities/feliratkozas.entity";
import { szemelyGeneralas } from "./adat-generalas/szemely-adat-generalas";
import { telepulesGeneralas } from "./adat-generalas/telepules-adat-generalas";
import { hirGeneralas } from "./adat-generalas/hir-adat-generalas";
import { esemenyGeneralas } from "./adat-generalas/esemeny-adat-generalas";
import { CreateFeliratkozasDto } from "../feliratkozasok/dto/create-feliratkozas.dto";

@Injectable()
export class TesztAdatService {
    constructor (
        @InjectRepository(Hir) private hirRepository: Repository<Hir>,
        @InjectRepository(Esemeny) private esemenyRepository: Repository<Esemeny>,
        @InjectRepository(Szemely) private szemelyRepository: Repository<Szemely>,
        @InjectRepository(Telepules) private telepulesRepository: Repository<Telepules>,
        @InjectRepository(Feliratkozas) private feliratkozasRepository: Repository<Feliratkozas>
    ) {}

    async szemelyTesztAdatLetrehoz(count: number) {
        const szemelyek = await Promise.all(
          Array.from({ length: count }, (_, index) => szemelyGeneralas(index + 1)),
        );
        await this.szemelyRepository.save(szemelyek, { chunk: 100 });
        console.log(`${count} személy generálva`)
        return { message: `${count} személy generálva` };
    }
    
    async szemelyTesztAdatTorol() {
        try {
            await this.szemelyRepository.manager.transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.getRepository(Feliratkozas).clear();
                await transactionalEntityManager.getRepository(Cim).clear();
                await transactionalEntityManager.getRepository(Szemely).clear();
                await transactionalEntityManager.query(`
                    DELETE FROM sqlite_sequence WHERE name IN ('szemelyek', 'cimek', 'feliratkozasok')
                `);
            });
        } catch (error) {
            let errorMessage = 'Ismeretlen hiba történt';
            if (error instanceof QueryFailedError) {
                errorMessage = `Adatbázis hiba: ${error.message}`;
                if (error.message.includes('FOREIGN KEY constraint failed')) {
                    errorMessage = 'Nem lehet törölni a táblákat, mert függő rekordok léteznek';
                } else if (error.message.includes('database is locked')) {
                    errorMessage = 'Az adatbázis zárolva van, próbálja újra később';
                }
            } else if (error instanceof Error) {
                errorMessage = `Általános hiba: ${error.message}`;
            }
            throw new Error(errorMessage);
        }
        console.log(`A személyek törlése sikeresen megtörtént`);
        return { message: `A személyek törlése sikeresen megtörtént` };
    }

    async telepulesTesztAdatLetrehoz() {
        const telepulesek = await telepulesGeneralas()
        await this.telepulesRepository.save(telepulesek, { chunk: 100 });
        console.log(`${telepulesek.length} település beillesztve`);
        return { message: `${telepulesek.length} település beillesztve` };
    }

    async telepulesTesztAdatTorol() {
        try {
            await this.telepulesRepository.manager.transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.getRepository(Telepules).clear();
                await transactionalEntityManager.query(`
                    DELETE FROM sqlite_sequence WHERE name IN ('telepulesek')
                `);
            });
        } catch (error) {
            let errorMessage = 'Ismeretlen hiba történt';
            if (error instanceof QueryFailedError) {
                errorMessage = `Adatbázis hiba: ${error.message}`;
                if (error.message.includes('database is locked')) {
                    errorMessage = 'Az adatbázis zárolva van, próbálja újra később';
                }
            } else if (error instanceof Error) {
                errorMessage = `Általános hiba: ${error.message}`;
            }
            throw new Error(errorMessage);
        }
        console.log(`Települések törlése sikeresen megtörtént`);
        return { message: `Települések törlése sikeresen megtörtént` };
    }

    async hirTesztAdatLetrehoz() {
        const hirek = await hirGeneralas()
        await this.hirRepository.save(hirek, { chunk: 100 });
        console.log(`${hirek.length} hír beillesztve`)
        return { message: `${hirek.length} hír beillesztve` };
    }

    async hirTesztAdatTorol() {
        try {
            await this.hirRepository.manager.transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.getRepository(Hir).clear();
                await transactionalEntityManager.query(`
                    DELETE FROM sqlite_sequence WHERE name IN ('hirek')
                `);
            });
        } catch (error) {
            let errorMessage = 'Ismeretlen hiba történt';
            if (error instanceof QueryFailedError) {
                errorMessage = `Adatbázis hiba: ${error.message}`;
                if (error.message.includes('database is locked')) {
                    errorMessage = 'Az adatbázis zárolva van, próbálja újra később';
                }
            } else if (error instanceof Error) {
                errorMessage = `Általános hiba: ${error.message}`;
            }
            throw new Error(errorMessage);
        }
        console.log(`A hírek törlése sikeresen megtörtént`)
        return { message: `A hírek törlése sikeresen megtörtént` };
    }

    async esemenyTesztAdatLetrehoz() {
        const esemenyek = await esemenyGeneralas()
        await this.esemenyRepository.save(esemenyek, { chunk: 100 });
        console.log(`${esemenyek.length} esemeny beillesztve`)
        return { message: `${esemenyek.length} esemeny beillesztve` };
    }

    async esemenyTesztAdatTorol() {
        try {
            await this.esemenyRepository.manager.transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.getRepository(Feliratkozas).clear();
                await transactionalEntityManager.getRepository(Esemeny).clear();
                await transactionalEntityManager.query(`
                    DELETE FROM sqlite_sequence WHERE name IN ('hirek, feliratkozasok')
                `);
            });
        } catch (error) {
            let errorMessage = 'Ismeretlen hiba történt';
            if (error instanceof QueryFailedError) {
                errorMessage = `Adatbázis hiba: ${error.message}`;
                if (error.message.includes('FOREIGN KEY constraint failed')) {
                    errorMessage = 'Nem lehet törölni a táblákat, mert függő rekordok léteznek';
                } else if (error.message.includes('database is locked')) {
                    errorMessage = 'Az adatbázis zárolva van, próbálja újra később';
                }
            } else if (error instanceof Error) {
                errorMessage = `Általános hiba: ${error.message}`;
            }
            throw new Error(errorMessage);
        }
        console.log(`Az események törlése sikeresen megtörtént`);
        return { message: `Az események törlése sikeresen megtörtént` };
    }

    async feliratkozasTesztAdatLetrehoz() {
        const feliratkozasok: Array<CreateFeliratkozasDto> = [];
        const szemelyek: Array<Szemely> = await this.szemelyRepository
                .createQueryBuilder('szemely')
                .where('szemely.szemely_id % 2 = 0')
                .getMany();
        const esemenyek: Array<Esemeny> = await this.esemenyRepository.find();
        for (let i: number = 0; i < szemelyek.length; i++) {
            const esemenyszam: number = Math.floor(Math.random() * 7) + 1;
            let esemenyValasztas: Set<Esemeny> = new Set<Esemeny>();
            for (let j: number = 0; j < esemenyszam; j++) {
                esemenyValasztas.add(esemenyek[Math.floor(Math.random() * esemenyek.length)]);
            }
            for (const item of esemenyValasztas) {
                feliratkozasok.push({
                    feliratkozas_esemeny_id: item.esemeny_id,
                    feliratkozas_szemely_id: szemelyek[i].szemely_id
                })
            }
        }
        await this.feliratkozasRepository.save(feliratkozasok, { chunk: 100 });
        console.log(`Eseményekre ${feliratkozasok.length} feliratkozás rögzítésre került`)
        return { message: `Eseményekre ${feliratkozasok.length} feliratkozás rögzítésre került` };
    }

    async feliratkozasTesztAdatTorol() {
        try {
            await this.feliratkozasRepository.manager.transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.getRepository(Feliratkozas).clear();
                await transactionalEntityManager.query(`
                    DELETE FROM sqlite_sequence WHERE name IN ('feliratkozasok')
                `);
            });
        } catch (error) {
            let errorMessage = 'Ismeretlen hiba történt';
            if (error instanceof QueryFailedError) {
                errorMessage = `Adatbázis hiba: ${error.message}`;
                if (error.message.includes('database is locked')) {
                    errorMessage = 'Az adatbázis zárolva van, próbálja újra később';
                }
            } else if (error instanceof Error) {
                errorMessage = `Általános hiba: ${error.message}`;
            }
            throw new Error(errorMessage);
        }
        console.log(`Az eseményekre történő feliratkozások törlésre kerültek`)
        return { message: `Az eseményekre történő feliratkozások törlésre kerültek` };
    }

    async tesztadatokTorlese() {
        try {
            await this.szemelyRepository.manager.transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.getRepository(Feliratkozas).clear();
                await transactionalEntityManager.getRepository(Cim).clear();
                await transactionalEntityManager.getRepository(Szemely).clear();
                await transactionalEntityManager.getRepository(Hir).clear();
                await transactionalEntityManager.getRepository(Esemeny).clear();
                await transactionalEntityManager.getRepository(Telepules).clear();
                await transactionalEntityManager.query(`
                    DELETE FROM sqlite_sequence WHERE name IN ('szemelyek', 'cimek', 'feliratkozasok',
                        'hirek', 'esemenyek', 'telepulesek')
                `);
            });
        } catch (error) {
            let errorMessage = 'Ismeretlen hiba történt';
            if (error instanceof QueryFailedError) {
                errorMessage = `Adatbázis hiba: ${error.message}`;
                if (error.message.includes('FOREIGN KEY constraint failed')) {
                    errorMessage = 'Nem lehet törölni a táblákat, mert függő rekordok léteznek';
                } else if (error.message.includes('database is locked')) {
                    errorMessage = 'Az adatbázis zárolva van, próbálja újra később';
                }
            } else if (error instanceof Error) {
                errorMessage = `Általános hiba: ${error.message}`;
            }
            throw new Error(errorMessage);
        }  
        console.log(`A tesztadatok törlése sikeresen megtörtént`);
        return { message: `A tesztadatok törlése sikeresen megtörtént` };    
    }

}