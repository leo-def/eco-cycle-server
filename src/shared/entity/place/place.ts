import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne } from 'typeorm';
import { ActivityTypeEnum } from '../../../enums/Entity/activity-type.enum';
import { Address } from '../address/address';
import { Media } from '../media/media';
import { AppTitleEntity } from '../abstract/app-title-entity';
import { Group } from '../group/group';

@Entity()
export class Place extends AppTitleEntity {

  @OneToOne(() => Address, null, { cascade: true, eager: true })
  @JoinColumn()
  address?: Address;

  @ManyToMany(() => Media)
  @JoinTable()
  media?: Array<Media>;

  @Column()
  type?: ActivityTypeEnum;

  @ManyToOne(() => Group, (group) => group.places, { eager: true })
  @JoinColumn({ name: "groupId", referencedColumnName: "id" })
  group?: Group;

  @Column()
  groupId?: string;

}