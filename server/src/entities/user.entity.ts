import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  hashedPassword: string;
}
