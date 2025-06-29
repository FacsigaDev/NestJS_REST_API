import * as fs from 'fs';
import * as path from 'path';
import { CreateEsemenyDto } from '../../esemenyek/dto/create-esemeny.dto';

export async function esemenyGeneralas(): Promise<CreateEsemenyDto[]> {
    const esemenyAdatok: Array<CreateEsemenyDto> = []
    const esemenyek = JSON.parse(
        fs.readFileSync(path.join(__dirname, '..', '..', '..', 'database', 'adat-forras', 'esemenyek.json'), 'utf-8'),
    );
    for (let i: number = 0; i<esemenyek.length; i++) {
        esemenyAdatok.push({
            esemeny_nev: esemenyek[i].megnevezes,
            esemeny_leiras: esemenyek[i].leiras,
            esemeny_helyszin: esemenyek[i].helyszin,
            esemeny_idopont: esemenyek[i].datum,
            esemeny_max_fo: 500
        })
    }
    return esemenyAdatok;
}