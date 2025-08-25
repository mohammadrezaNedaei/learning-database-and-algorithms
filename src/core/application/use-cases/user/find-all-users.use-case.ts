import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/core/domain/repositories/user-repository";



@Injectable()
export class FindAllUsersUseCase {
    constructor(
        private readonly userRepo: UserRepository,
    ) {}

    async execute() {
        return this.userRepo.findAll();
    }
}