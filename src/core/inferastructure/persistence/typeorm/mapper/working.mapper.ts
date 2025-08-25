import { Working } from "src/core/domain/entities/working.entity";
import { Worklogs } from "../entities/working.entity";
import { UserMapper } from "./user.mapper";
import { ProjectMapper } from "./project.mapper";

export class WorkingMapper {
    static toDomain(WorkingEntity: Worklogs): Working {
        return new Working(WorkingEntity.id,
            WorkingEntity.userId,
            WorkingEntity.projectId,
            UserMapper.toDomain(WorkingEntity.user),
            ProjectMapper.toDomain(WorkingEntity.project)); 
    }

    static toPersistence(working: Working): Worklogs {
        const outCome =  new Worklogs();
        outCome.id = working.id;
        outCome.userId = working.id;
        outCome.user = UserMapper.toPersistence(working.getUser());
        outCome.project = ProjectMapper.toPersistence(working.getProject());
        return outCome;

    }
}