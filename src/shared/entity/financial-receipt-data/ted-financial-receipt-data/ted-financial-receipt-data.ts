import { Column, Entity } from 'typeorm';
import { FinancialReceiptData } from '../financial-receipt-data';

@Entity()
export class TedFinancialReceiptData extends FinancialReceiptData {

  @Column()
  account?: string;

  @Column()
  agency?: string;

  @Column()
  agencyDigit?: string;

  @Column()
  bankCod?: string;

}