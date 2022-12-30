import { Column, Entity } from 'typeorm';
import { AppEntity } from '../abstract/app-entity';
import { FinancialReceiptDataTypeEnum } from '../../../enums/Entity/financial-receipt-data-type.enum';

@Entity()
export class FinancialReceiptData extends AppEntity {

  @Column()
  type?: FinancialReceiptDataTypeEnum;
  
}

