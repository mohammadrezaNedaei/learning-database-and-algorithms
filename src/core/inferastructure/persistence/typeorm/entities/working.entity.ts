import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Users } from './user.entity';
import { Projects } from './project.entity';

@Entity()
export class Worklogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  projectId: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => Projects)
  @JoinColumn({ name: 'projectId' })
  project: Projects;
}
