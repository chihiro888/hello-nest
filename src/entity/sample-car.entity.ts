import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SampleCar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  carName: string;

  @Column()
  isDeleted: boolean;
}
