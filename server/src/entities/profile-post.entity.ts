import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Content } from './content.entity';
import { Profile } from './profile.entity';

@Entity()
export class ProfilePost {
  @PrimaryGeneratedColumn()
  id: string;
}
