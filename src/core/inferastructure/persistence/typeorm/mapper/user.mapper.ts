import { User } from "src/core/domain/entities/user.entity";
import { Users } from "../entities/user.entity";

export class UserMapper {
    static toDomain(UserEntity: Users): User {
        return new User(UserEntity.id, UserEntity.name); 
    }

    static toPersistence(user: User): Users {
        const outCome =  new Users();
        outCome.id = user.id;
        outCome.name = user.getName();
        return outCome;

    }
}