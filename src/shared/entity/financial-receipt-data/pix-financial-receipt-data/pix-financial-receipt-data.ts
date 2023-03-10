import { Column, Entity } from 'typeorm';
import { PixFinancialReceiptDataKeyTypeEnum } from '../../../../enums/entity/pix-financial-receipt-data-key-type.enum';
import { FinancialReceiptData } from '../financial-receipt-data';

@Entity()
export class PixFinancialReceiptData extends FinancialReceiptData {

  @Column()
  keyType?: PixFinancialReceiptDataKeyTypeEnum;

  @Column()
  key?: string;

}
