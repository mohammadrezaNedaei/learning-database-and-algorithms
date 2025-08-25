import { DynamicModule, Module, Type } from "@nestjs/common";
import { FindAllUsersUseCase } from "src/core/application/use-cases/user/find-all-users.use-case";
import { FindUsersWithProjectUseCase } from "src/core/application/use-cases/user/find-users-with-project.use-case";
import { UserController } from "src/core/presentation/http/user/user.controller";


@Module({
    controllers: [UserController],
    providers: [
        FindAllUsersUseCase,
        FindUsersWithProjectUseCase
    ]
})
export class UserModule {
    static withInfrastructure(infrastructureModule: Type | DynamicModule) {
            return {
                module: UserModule,
                imports: [infrastructureModule],
            };
        }
}