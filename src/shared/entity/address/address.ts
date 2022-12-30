import { Column, Entity } from 'typeorm';
import { AppEntity } from '../abstract/app-entity';

@Entity()
export class Address extends AppEntity {

  @Column()
  cep?: string;

  @Column()
  street?: string;

  @Column()
  number?: string;

  @Column()
  city?: string;

  @Column()
  country?: string;

  @Column()
  state?: string;

  @Column()
  neighborhood?: string;

  @Column()
  complement?: string;

}