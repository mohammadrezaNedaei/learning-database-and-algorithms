import { User } from "src/core/domain/entities/user.entity";
import { ProjectsRepository } from "src/core/domain/repositories/project-repository";
import { UserRepository } from "src/core/domain/repositories/user-repository";
import { faker } from '@faker-js/faker';
import { Project } from "src/core/domain/entities/project.entity";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class CreateDataUseCase {
    private readonly logger = new Logger(CreateDataUseCase.name);
    
    constructor(
      private readonly userRepo: UserRepository,
      private readonly projectRepo: ProjectsRepository
    ) {
      this.logger.debug(`userRepo: ${!!userRepo ? 'working!': 'failed'}`);
      this.logger.debug(`projectRepo: ${!! projectRepo? 'working!': 'failed'}`);
    }

    async execute(usersCount = 10000, projectsCount = 10000) {
    // users
    const users: User[] = [];
    for (let i = 0; i < usersCount; i++) {
      const user = await this.userRepo.save(new User(0, faker.person.fullName()));
      users.push(user);
    }

    // projects
    const projects: Project[] = [];
    for (let i = 0; i < projectsCount; i++) {
      const randomUserId =
        Math.random() < 0.7 // 70% of projects assigned to users
          ? users[Math.floor(Math.random() * users.length)].id
          : null;
      const project = await this.projectRepo.save(new Project(0,
        faker.commerce.productName(),
        randomUserId,
      ));
      projects.push(project);
    }

    return { users: usersCount, projects: projectsCount };
  }
}