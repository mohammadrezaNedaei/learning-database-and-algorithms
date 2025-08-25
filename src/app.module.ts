import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationBootstrapOptions } from 'src/core/shared/interfaces/application-bootstrap-options-interface';
import { InfrastructureModule } from 'src/core/inferastructure/persistence/inferastructure.module';
import { dataFakerModule } from './app/data-faker/data-faker.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './app/user/user.module';
import { ProjectModule } from './app/project/project.module';

@Module({
  imports: [
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports:[
        CoreModule.forRoot(options),
        dataFakerModule.withInfrastructure(
          InfrastructureModule.use(options.driver)
        ),
        UserModule.withInfrastructure(
          InfrastructureModule.use(options.driver)
        ),
        ProjectModule.withInfrastructure(
          InfrastructureModule.use(options.driver)
        )
      ],
      export: [CoreModule]
    }
  }
}
