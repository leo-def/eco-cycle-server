import { Column } from "typeorm";
import { AppEntity } from "./app-entity";

export class AppTitleEntity extends AppEntity {

  @Column()
  title?: string;

}