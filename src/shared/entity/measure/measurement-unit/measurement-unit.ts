import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AppTitleEntity } from '../../abstract/app-title-entity';
import { PhysicalQuantity } from '../physical-quantity/physical-quantity';

@Entity()
export class MeasurementUnit extends AppTitleEntity {

  @Index()
  @Column({ unique: true})
  symbol?: string;

  @Column()
  value?: number;

  @ManyToOne(() => PhysicalQuantity, (object: PhysicalQuantity) => object.symbol, { eager: true, nullable: true  })
  @JoinColumn({ name: "physicalQuantitySymbol", referencedColumnName: "symbol"  })
  physicalQuantity?: PhysicalQuantity;

  @Column({ nullable: true })
  physicalQuantitySymbol?: string;


}