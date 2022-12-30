import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { VehicleTypeEnum } from '../../../enums/Entity/vehicle-type.enum';
import { Media } from '../media/media';
import { AppTitleEntity } from '../abstract/app-title-entity';
import { Group } from '../group/group';

@Entity()
export class Vehicle extends AppTitleEntity {

  @Column()
  plate?: string;

  @ManyToMany(() => Media)
  @JoinTable()
  media?: Array<Media>;

  @Column()
  type?: VehicleTypeEnum;

  @ManyToOne(() => Group, (group) => group.vehicles, { eager: true })
  @JoinColumn({ name: "groupId", referencedColumnName: "id" })
  group?: Group;

  @Column()
  groupId?: string;

}