import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { CommentPost } from './comment-post.entity';
import { Profile } from './profile.entity';

@Entity()
export class Content {
  @PrimaryColumn()
  post_id: string;
  @Column()
  text: string;
  @Column()
  category: string;
  @Column()
  votes: number;
  @Column()
  recaws: number;
  @Column({ nullable: true })
  image_id: string;

  @ManyToOne(() => Profile, (profile) => profile.posts, { eager: true })
  profile: Profile;

  @OneToMany(() => CommentPost, (CommentPost) => CommentPost.postId)
  comments: CommentPost[];
}
