import { Entity, Column, Index } from "typeorm";
import { AppTitleEntity } from "../../abstract/app-title-entity";

@Entity()
export class PhysicalQuantity extends AppTitleEntity {

  @Index()
  @Column({ unique: true})
  symbol?: string;

}