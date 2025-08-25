import { Working } from "../entities/working.entity";

export abstract class WorkingRepository {
    abstract save(working: Working): Promise<Working>;
    abstract findAll(): Promise<Working[]>;
}