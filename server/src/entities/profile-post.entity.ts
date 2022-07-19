import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from './content.entity';
import { Profile } from './profile.entity';

@Entity()
export class ProfilePost {
  @PrimaryGeneratedColumn()
  id: string;
  // map profile here and the content then retrieve both of them at the same time
  // @Column()
  // userId: Profile;
  // @Column()
  // postId: Content;
}
