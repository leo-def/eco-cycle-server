import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { ItemOfferTypeEnum } from '../../../enums/Entity/item-offer-type.enum';
import { AppEntity } from '../abstract/app-entity';
import { Group } from '../group/group';
import { Place } from '../place/place';
import { ProductItem } from '../product-item/product-item';

@Entity()
export class ItemOffer extends AppEntity {

  @OneToOne(() => ProductItem, { eager: true, cascade: true, onDelete:'CASCADE', onUpdate:'CASCADE' })
  @JoinColumn({ name: "itemId", referencedColumnName: "id" })
  item?: ProductItem;

  @Column()
  itemId?: string;

  @ManyToOne(() => Place, { eager: true })
  @JoinColumn({ name: "placeId", referencedColumnName: "id" })
  place?: Place;

  @Column()
  placeId?: string;

  @Column()
  type?: ItemOfferTypeEnum;

  @ManyToOne(() => Group, (group) => group.itemOffers, { eager: true })
  @JoinColumn({ name: "groupId", referencedColumnName: "id" })
  group?: Group;

  @Column()
  groupId?: string;

}