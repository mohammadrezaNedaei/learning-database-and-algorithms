import { User } from "../entities/user.entity";

export abstract class UserRepository {
    abstract save(User: User): Promise<User>;
    abstract findAll(): Promise<User[]>;
    abstract findUsersWithProjects(): Promise<User[]>
}