import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Content } from './content.entity';
import { Profile } from './profile.entity';

@Entity()
export class VoteUser {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  VoteT: number;

  @OneToOne(() => Profile)
  @JoinColumn()
  op: Profile;

  @OneToOne(() => Content)
  @JoinColumn()
  post: Content;
}
