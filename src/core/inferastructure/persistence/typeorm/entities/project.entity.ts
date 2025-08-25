import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // no FK constraint
  @Column({ nullable: true })
  userId: number;
}