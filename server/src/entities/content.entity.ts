import { Column, Entity, PrimaryColumn } from 'typeorm';

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
  image_url: string;
}
//create upvote and downvote table.
