import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "../entities/user.entity";
import { User } from "src/core/domain/entities/user.entity";
import { UserMapper } from "../mapper/user.mapper";
import { UserRepository } from "src/core/domain/repositories/user-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrmUserRepository implements UserRepository {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>
    ) {}

    async save(user: User): Promise<User> {
        const userEntity = UserMapper.toPersistence(user);
        return UserMapper.toDomain(await this.userRepository.save(userEntity));
    }

    async findAll(): Promise<User[]> {
        const usersEntities = await this.userRepository.find();
        return usersEntities.map(UserMapper.toDomain);
    }
}