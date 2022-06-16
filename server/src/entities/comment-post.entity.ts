import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommentPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  post_id: string;
  @Column()
  user_id: string;
  @Column()
  description: string;
}
