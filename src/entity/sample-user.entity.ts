import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SampleUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  isDeleted: boolean;
}
