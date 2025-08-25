import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/core/domain/repositories/user-repository";


@Injectable()
export class FindUsersWithProjectUseCase {
    constructor(
        private readonly userRepo:UserRepository
    ) {}

    async execute() {
        return this.userRepo.findUsersWithProjects();
    }
}