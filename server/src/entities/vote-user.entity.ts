import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VoteUser {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  user_id: string;
  @Column()
  post_id: string;
  @Column()
  VoteT: number;
}
