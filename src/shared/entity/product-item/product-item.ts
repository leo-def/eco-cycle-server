import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne } from 'typeorm';
import { AppEntity } from '../abstract/app-entity';
import { Value } from '../measure/value';
import { Media } from '../media/media';
import { Product } from '../product/product';

@Entity()
export class ProductItem extends AppEntity {

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: "productId", referencedColumnName: "id" })
  product?: Product;

  @Column()
  productId?: string;

  @ManyToMany(() => Media)
  @JoinTable()
  media?: Array<Media>;

  @OneToOne(() => Value, { eager: true, cascade: true, onDelete:'CASCADE', onUpdate:'CASCADE' })
  @JoinColumn({ name: "valueId", referencedColumnName: "id" })
  value?: Value;

  @Column()
  valueId?: string;

  @OneToOne(() => Value, { eager: true, cascade: true, onDelete:'CASCADE', onUpdate:'CASCADE' })
  @JoinColumn({ name: "financialValueId", referencedColumnName: "id" })
  financialValue?: Value;

  @Column()
  financialValueId?: string;

}