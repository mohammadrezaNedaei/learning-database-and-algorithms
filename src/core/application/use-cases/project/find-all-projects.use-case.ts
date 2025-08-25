import { Injectable, Logger } from "@nestjs/common";
import { ProjectsRepository } from "src/core/domain/repositories/project-repository";


@Injectable()
export class FindAllProjectsUseCase {
    private readonly logger = new Logger(FindAllProjectsUseCase.name)
    constructor(
        private readonly projectRepo: ProjectsRepository
    ) {
        this.logger.debug(`projectRepo: ${!!projectRepo ? 'is working!': 'failed'}`);
    }

    async execute() {
        return this.projectRepo.findAll();
    }
}