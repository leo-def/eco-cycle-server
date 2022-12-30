import { Column, Entity, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
import { AppEntity } from '../abstract/app-entity';
import { MeasurementUnit } from './measurement-unit/measurement-unit';

@Entity()
export class Value extends AppEntity {

  @ManyToOne(() => MeasurementUnit, { eager: true })
  @JoinColumn({ name: "measurementUnitId", referencedColumnName: "id" })
  measurementUnit?: MeasurementUnit;

  @Column()
  measurementUnitId?: string;

  @Column()
  value?: number;

}