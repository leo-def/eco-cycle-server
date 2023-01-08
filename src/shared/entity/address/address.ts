import { Column, Entity } from 'typeorm';
import { AppEntity } from '../abstract/app-entity';

@Entity()
export class Address extends AppEntity {

  @Column()
  cep?: string;

  @Column({ nullable: true })
  street?: string;

  @Column({ nullable: true })
  number?: string;

  @Column()
  city?: string;

  @Column()
  country?: string;

  @Column()
  state?: string;

  @Column()
  neighborhood?: string;

  @Column({ nullable: true })
  complement?: string;

}