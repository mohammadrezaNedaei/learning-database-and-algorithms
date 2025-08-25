import { Module } from "@nestjs/common";
import { OrmPersistenceModule } from "./typeorm/typeorm-persistence.module";

@Module({})
export class InfrastructureModule {
    static use(driver: 'orm' | 'in-memory') {
        const persistenceModule = 
            driver === 'orm'
            ? OrmPersistenceModule
            : null; 

        return {
            module: InfrastructureModule,
            imports: [persistenceModule],
            exports: [persistenceModule],
        }
    }
}