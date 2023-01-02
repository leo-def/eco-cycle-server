import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

export class AppEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({ type: "date", default: () => "date('now')" })
  createAt?: Date;

  @UpdateDateColumn({ type: "date", default: () => "date('now')", onUpdate: "date('now')" })
  updateAt?: Date;

}