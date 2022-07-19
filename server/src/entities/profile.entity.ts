import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { CommentPost } from './comment-post.entity';
import { Content } from './content.entity';

@Entity()
export class Profile {
  @PrimaryColumn()
  id: string;
  @Column({ nullable: true })
  name: string;
  @Column()
  username: string;
  @Column({ nullable: true })
  bio: string;
  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Content, (content) => content.profile)
  posts: Content[];
  @OneToMany(() => CommentPost, (commentpost) => commentpost.id)
  comments: CommentPost[];

  profile: Content;
}
