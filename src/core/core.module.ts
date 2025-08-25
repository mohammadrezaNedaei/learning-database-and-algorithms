import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApplicationBootstrapOptions } from "src/core/shared/interfaces/application-bootstrap-options-interface";
import { Projects } from "./inferastructure/persistence/typeorm/entities/project.entity";
import { Users } from "./inferastructure/persistence/typeorm/entities/user.entity";
import { Worklogs } from "./inferastructure/persistence/typeorm/entities/working.entity";
import { InfrastructureModule } from "./inferastructure/persistence/inferastructure.module";


@Module({})
export class CoreModule {
    static forRoot(options: ApplicationBootstrapOptions) {
        const imports = options.driver === 'orm'
        ? [
            TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5434,
                username: 'postgres',
                password: '123',
                database: 'postgres',
                autoLoadEntities: true,
                entities: [Users, Projects, Worklogs],
                synchronize: true,
            }), 
        ] 
        : [];
        return {
      module: CoreModule,
      imports,
    };
    }
}