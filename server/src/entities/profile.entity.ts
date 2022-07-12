import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
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
}
