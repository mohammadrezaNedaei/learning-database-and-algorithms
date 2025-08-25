import { Controller, Logger, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateDataUseCase } from "src/core/application/use-cases/data-faker/create-data.use-case";

@ApiTags('data-faker')
@Controller('data-faker')
export class DataFakerController {
    private readonly logger = new Logger(DataFakerController.name)
    constructor(
        private readonly createDataUseCase: CreateDataUseCase
    ) {
        this.logger.debug(`createDataUseCase: ${!!createDataUseCase ? 'working!': 'failed'}`);
    }

    @Post('create')
    async createData(@Query('userCount') userCount: number, @Query('projectCount') projectCount: number) {
        return this.createDataUseCase.execute(userCount, projectCount);
    }
}