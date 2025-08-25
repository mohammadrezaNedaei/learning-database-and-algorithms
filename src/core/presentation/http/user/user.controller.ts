import { Controller, Get, Logger } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FindAllUsersUseCase } from "src/core/application/use-cases/user/find-all-users.use-case";
import { UserRepository } from "src/core/domain/repositories/user-repository";

@ApiTags('user')
@Controller('user')
export class UserController {
    private readonly logger = new Logger(UserController.name)
    constructor(
        private readonly findAllUseCase : FindAllUsersUseCase
    ) {
        this.logger.debug(`findAllUseCase: ${!!findAllUseCase ? 'is working!' : 'failed'}`)
    }

    @Get()
    async findAll() {
        return this.findAllUseCase.execute();
    }
}