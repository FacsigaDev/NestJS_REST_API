import * as fs from 'fs';
import * as path from 'path';
import { CreateHirDto } from '../../hirek/dto/create-hir.dto';

export async function hirGeneralas(): Promise<CreateHirDto[]> {
    const hirAdatok: Array<CreateHirDto> = []
    const hirek = JSON.parse(
        fs.readFileSync(path.join(__dirname, '..', '..', '..', 'database', 'adat-forras', 'hirek.json'), 'utf-8'),
    );
    for (let i: number = 0; i<hirek.length; i++) {
        hirAdatok.push({
            hir_cim: hirek[i].cim,
            hir_tartalom: hirek[i].tartalom,
            hir_datum: hirek[i].datum
        })
    }
    return hirAdatok;
}