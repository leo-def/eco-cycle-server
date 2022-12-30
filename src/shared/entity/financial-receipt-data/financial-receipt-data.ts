import { Column, Entity } from 'typeorm';
import { AppEntity } from '../abstract/app-entity';
import { FinancialReceiptDataTypeEnum } from '../../../enums/entity/financial-receipt-data-type.enum';

@Entity()
export class FinancialReceiptData extends AppEntity {

  @Column()
  type?: FinancialReceiptDataTypeEnum;
  
}

