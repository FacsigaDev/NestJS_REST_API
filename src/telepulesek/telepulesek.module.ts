import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TelepulesController } from "./telepulesek.controller";
import { TelepulesService } from "./telepules.service";
import { Telepules } from "../entities/telepules.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Telepules])],
    controllers: [TelepulesController],
    providers: [TelepulesService]
})
export class TelepulesekModule {}