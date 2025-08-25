import { Controller, Get, Logger } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FindAllProjectsUseCase } from "src/core/application/use-cases/project/find-all-projects.use-case";

@ApiTags('Projects')
@Controller('project')
export class ProjectController {
    private readonly logger = new Logger(ProjectController.name)
    constructor(
        private readonly findAllProjectsUseCase: FindAllProjectsUseCase
    ) {
        this.logger.debug(`findAllProjectsUseCase: ${!!findAllProjectsUseCase ? 'is working': 'failed'}`)
    }

    @Get()
    async findAll() {
        return await this.findAllProjectsUseCase.execute();
    }
}