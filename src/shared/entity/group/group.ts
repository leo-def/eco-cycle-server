import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { ActivityTypeEnum } from '../../../enums/Entity/activity-type.enum';
import { AppEntity } from '../abstract/app-entity';
import { Collaborator } from '../collaborator/collaborator';
import { ItemOffer } from '../item-offer/item-offer';
import { Place } from '../place/place';
import { Profile } from '../profile/profile';
import { User } from '../user/user';
import { Vehicle } from '../vehicle/vehicle';

@Entity()
export class Group extends AppEntity {

  @Column()
  type?: ActivityTypeEnum;

  @OneToOne(() => Profile, { nullable: true })
  @JoinColumn({ name: "profileId", referencedColumnName: "id" })
  profile?: Profile;

  @Column({ nullable: true })
  profileId?: string;

  @ManyToOne(() => User, { eager: true})
  @JoinColumn({ name: "ownerId", referencedColumnName: "id" })
  owner?: User;

  @Column()
  ownerId?: string;

  @OneToMany(() => Collaborator, (collaborator) => collaborator.group)
  @JoinTable()
  collaborators?: Array<Collaborator>;

  @OneToMany(() => Place, (place) => place.group)
  @JoinTable()
  places?: Array<Place>;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.group)
  @JoinTable()
  vehicles?: Array<Vehicle>;

  @OneToMany(() => ItemOffer, (itemOffer) => itemOffer.group)
  @JoinTable()
  itemOffers?: Array<ItemOffer>;

}