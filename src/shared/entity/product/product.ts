import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Media } from '../media/media';
import { AppTitleEntity } from '../abstract/app-title-entity';

@Entity()
export class Product extends AppTitleEntity {

  @ManyToMany(() => Media)
  @JoinTable()
  media?: Array<Media>;

}