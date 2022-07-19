import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProfilePost {
  @Column()
  user_id: string;
  @Column()
  post_id;
  string;
}
