import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Content } from './content.entity';
import { Profile } from './profile.entity';

@Entity()
export class CommentPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  description: string;

  @ManyToOne(() => Profile, (profile) => profile.comments, { eager: true })
  op: Profile;
  @ManyToOne(() => Content, (content) => content.post_id, { eager: true })
  postId: Content;
}
