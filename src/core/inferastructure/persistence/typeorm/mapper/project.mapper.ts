import { Project } from "src/core/domain/entities/project.entity";
import { Projects } from "../entities/project.entity";

export class ProjectMapper {
    static toDomain(ProjectEntity: Projects): Project {
        return new Project(ProjectEntity.id, ProjectEntity.name, ProjectEntity.userId); 
    }

    static toPersistence(project: Project): Projects {
        const outCome =  new Projects();
        outCome.id = project.id;
        outCome.name = project.getName();
        outCome.userId = project.getUserId();
        return outCome;
    }
}