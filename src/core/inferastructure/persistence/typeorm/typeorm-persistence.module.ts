import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entities/user.entity";
import { Projects } from "./entities/project.entity";
import { Worklogs } from "./entities/working.entity";
import { UserRepository } from "src/core/domain/repositories/user-repository";
import { OrmUserRepository } from "./repository/user-repository";
import { WorkingRepository } from "src/core/domain/repositories/working-repository";
import { OrmWorkingRepository } from "./repository/working-repository";
import { ProjectsRepository } from "src/core/domain/repositories/project-repository";
import { OrmProjectRepository } from "./repository/project-repository";


@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Projects, Worklogs])
    ],
    providers: [
        {
            provide: UserRepository,
            useClass: OrmUserRepository
        },
        {
            provide: WorkingRepository,
            useClass: OrmWorkingRepository
        },
        {
            provide: ProjectsRepository,
            useClass: OrmProjectRepository
        }
    ],
    exports: [
        UserRepository,
        WorkingRepository,
        ProjectsRepository
    ]
})
export class OrmPersistenceModule {}