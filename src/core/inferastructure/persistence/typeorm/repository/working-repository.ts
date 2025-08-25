import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WorkingRepository } from "src/core/domain/repositories/working-repository";
import { Worklogs } from "../entities/working.entity";
import { Working } from "src/core/domain/entities/working.entity";
import { WorkingMapper } from "../mapper/working.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrmWorkingRepository implements WorkingRepository {
    constructor(
        @InjectRepository(Worklogs)
        private readonly repository: Repository<Worklogs>
    ) {}
    
    async save(working: Working): Promise<Working> {
        const worklog = WorkingMapper.toPersistence(working);
        return WorkingMapper.toDomain(await this.repository.save(worklog));
    }
    async findAll(): Promise<Working[]> {
        const worklogs = await this.repository.find();
        return worklogs.map(WorkingMapper.toDomain);
    }
}
