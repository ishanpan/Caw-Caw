import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Content {
  @PrimaryColumn()
  post_id: string;
  @Column()
  op_id: string;
  @Column()
  text: string;
  @Column()
  category: string;
  @Column()
  votes: number;
  @Column()
  comments: number;
  @Column()
  recaws: number;
  @Column({ nullable: true })
  image_id: string;

  @ManyToOne(() => Profile, (profile) => profile.posts)
  poster: Profile;
}
