import { Column, Entity, OneToMany, PrimaryColumn, JoinColumn } from 'typeorm';
import { Content } from './content.entity';

@Entity()
export class Profile {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  bio: string;
  @Column()
  image: string;

  @OneToMany(() => Content, (content) => content.op_id)
  posts: [];
}
