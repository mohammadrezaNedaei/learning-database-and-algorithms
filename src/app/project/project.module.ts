import { DynamicModule, Module, Type } from "@nestjs/common";
import { FindAllProjectsUseCase } from "src/core/application/use-cases/project/find-all-projects.use-case";
import { ProjectController } from "src/core/presentation/http/project/project.controller";

@Module({
    providers: [
        FindAllProjectsUseCase
    ],
    controllers: [
        ProjectController
    ]
})
export class ProjectModule {
    static withInfrastructure(infrastructureModule: Type | DynamicModule) {
        return {
            module: ProjectModule,
            imports: [infrastructureModule],
        };
    }
}