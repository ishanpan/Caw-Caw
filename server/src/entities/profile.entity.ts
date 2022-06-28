import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
