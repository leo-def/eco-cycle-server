import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

export class AppEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({ type: "datetime", default: () => "datetime('now')" })
  createAt?: Date;

  @UpdateDateColumn({ type: "datetime", default: () => "datetime('now')", onUpdate: "datetime('now')" })
  updateAt?: Date;

}