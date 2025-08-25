import { DynamicModule, Module, Type } from "@nestjs/common";
import { CreateDataUseCase } from "src/core/application/use-cases/data-faker/create-data.use-case";
import { CoreModule } from "src/core/core.module";
import { InfrastructureModule } from "src/core/inferastructure/persistence/inferastructure.module";
import { DataFakerController } from "src/core/presentation/http/data-faker/data-faker.controller";


@Module({
    providers: [
        CreateDataUseCase
    ],
    controllers: [DataFakerController]
})
export class dataFakerModule {
    static withInfrastructure(infrastructureModule: Type | DynamicModule) {
        return {
            module: dataFakerModule,
            imports: [infrastructureModule],
        };
    }
}