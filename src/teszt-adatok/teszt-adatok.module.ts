import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TesztAdatokController } from "./teszt-adatok.controller";
import { TesztAdatService } from "./teszt-adat.service";
import { Hir } from "../entities/hir.entity";
import { Esemeny } from "../entities/esemeny.entity";
import { Szemely } from "../entities/szemely.entity";
import { Cim } from "../entities/cim.entity";
import { Telepules } from "../entities/telepules.entity";
import { Feliratkozas } from "../entities/feliratkozas.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Szemely, Cim, Esemeny, Hir, Feliratkozas, Telepules])],
    controllers: [TesztAdatokController],
    providers: [TesztAdatService]
})
export class TesztAdatokModule {}