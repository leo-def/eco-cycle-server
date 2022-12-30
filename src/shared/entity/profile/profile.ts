import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AppEntity } from '../abstract/app-entity';
import { User } from '../user/user';

@Entity()
export class Profile extends AppEntity {

  @Column()
  name?: string;

}