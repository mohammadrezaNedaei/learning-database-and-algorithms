import { Project } from "../entities/project.entity";

export abstract class ProjectsRepository {
    abstract save(Project: Project): Promise<Project>;
    abstract findAll(): Promise<Project[]>;
}