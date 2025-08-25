import { DataSource } from 'typeorm';
import { Projects } from './entities/project.entity';
import { Users } from './entities/user.entity';
import { Worklogs } from './entities/working.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'postgres',
  entities: [Users, Projects, Worklogs],
  migrations: ['src/core/inferastructure/persistence/typeorm/migrations/*.ts'],
  synchronize: true, // we will use migrations instead
});
