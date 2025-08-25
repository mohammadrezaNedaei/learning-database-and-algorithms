import { InjectRepository } from "@nestjs/typeorm";
import { Projects } from "../entities/project.entity";
import { Repository } from "typeorm";
import { ProjectsRepository } from "src/core/domain/repositories/project-repository";
import { Project } from "src/core/domain/entities/project.entity";
import { ProjectMapper } from "../mapper/project.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrmProjectRepository implements ProjectsRepository {
    constructor(
        @InjectRepository(Projects)
        private readonly repository: Repository<Projects>
    ) {}

    async save(project: Project): Promise<Project> {
        const projectEntity = ProjectMapper.toPersistence(project);
        return ProjectMapper.toDomain(await this.repository.save(projectEntity));
    }

    async findAll(): Promise<Project[]> {
        const projectsEntities = await this.repository.find();
        return projectsEntities.map(ProjectMapper.toDomain);
    }
}