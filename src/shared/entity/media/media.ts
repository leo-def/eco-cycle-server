import { Column, Entity } from 'typeorm';
import { AppTitleEntity } from '../abstract/app-title-entity';

@Entity()
export class Media extends AppTitleEntity {

  @Column()
  alt?: string;

  @Column()
  type?: string;

  @Column()
  mediaType?: string;

  @Column()
  src?: string;

}