import * as fs from 'fs';
import * as path from 'path';
import { CreateTelepulesDto } from '../../telepulesek/dto/create-telepules.dto';

export async function telepulesGeneralas(): Promise<CreateTelepulesDto[]> {
    const telepulesAdatok: Array<CreateTelepulesDto> = []
    const telepulesek = JSON.parse(
        fs.readFileSync(path.join(__dirname, '..', '..', '..', 'database', 'adat-forras', 'telepulesek.json'), 'utf-8'),
    );
    for (let i: number = 0; i<telepulesek.length; i++) {
        telepulesAdatok.push({
            telepules_iranyitoszam: telepulesek[i].iranyitoszam,
            telepules_varos: telepulesek[i].varos,
            telepules_megye: telepulesek[i].megye
        })
    }
    return telepulesAdatok;
}