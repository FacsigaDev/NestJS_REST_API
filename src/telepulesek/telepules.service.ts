import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Repository, getMetadataArgsStorage } from "typeorm";
import { Telepules } from "../entities/telepules.entity";
import { CreateTelepulesDto } from "./dto/create-telepules.dto";
import { UpdateTelepulesDto } from "./dto/update-telepules.dto";

@Injectable()
export class TelepulesService {

    constructor(@InjectRepository(Telepules) private telepulesRepository: Repository<Telepules>){}

    async findAll(): Promise<Telepules[]> {
        return this.telepulesRepository.find()
    }

    async findOne(telepules_id: number): Promise<Telepules> {
        const telepules = await this.telepulesRepository.findOne({where: {telepules_id}})
        if (!telepules) throw new NotFoundException('A település nem található!')
        return telepules
    }

    async findIranyitoszam(iranyitoszam: string): Promise<Telepules[]> {
        const telepulesek = await this.telepulesRepository.find({where: {telepules_iranyitoszam: iranyitoszam}})
        if (!telepulesek) throw new NotFoundException('A település nem található!')
        return telepulesek
    }

    async create(createTelepulesDto: CreateTelepulesDto): Promise<Telepules> {
        const telepules = this.telepulesRepository.create(createTelepulesDto)
        return this.telepulesRepository.save(telepules)
    }

    // PUT: Teljes frissítés, nem küldött mezők null-ra állnak (kivéve id)
    async put(telepules_id: number, createTelepulesDto: CreateTelepulesDto): Promise<Telepules> {
        const telepules = await this.telepulesRepository.findOneBy({ telepules_id });
        if (!telepules) {
            throw new NotFoundException(`Település nem található: ${telepules_id}`);
        }
        const putTelepules = this.telepulesRepository.create({
            ...createTelepulesDto,
            telepules_id, // Megtartjuk a meglévő ID-t
            // Opcionális mezők nullázása, ha nem szerepelnek a DTO-ban
            telepules_megye: createTelepulesDto.telepules_megye ?? null, // Példa opcionális mező
            });

        // Mentés az adatbázisba
        return this.telepulesRepository.save(putTelepules);
    }

    // PATCH: Részleges frissítés, csak a megadott mezők frissülnek
    async patch(telepules_id: number, updateTelepulesDto: UpdateTelepulesDto): Promise<Telepules> {
        const telepules = await this.telepulesRepository.findOneBy({ telepules_id });
        if (!telepules) { throw new NotFoundException(`Település nem található: ${telepules_id}`); }

        // Null értékű mezők kiszűrése
        const filteredDto: Partial<UpdateTelepulesDto> = {};
        for (const key in updateTelepulesDto) {
            if (Object.prototype.hasOwnProperty.call(updateTelepulesDto, key)) {
                const value = updateTelepulesDto[key as keyof UpdateTelepulesDto];
                if (value !== null) { filteredDto[key as keyof UpdateTelepulesDto] = value; }
            }
        }

        // Frissítjük az entitást a szűrt DTO-val
        Object.assign(telepules, filteredDto);
        return this.telepulesRepository.save(telepules);
    }

    async delete(telepules_id: number): Promise<Telepules> {
        const telepules = await this.findOne(telepules_id);
        return await this.telepulesRepository.remove(telepules);
    }
}