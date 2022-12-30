import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CollaboratorRoleEnum } from '../../../enums/Entity/collaborator-role.enum';
import { AppTitleEntity } from '../abstract/app-title-entity';
import { User } from '../user/user';
import { Group } from '../group/group';

@Entity()
export class Collaborator extends AppTitleEntity {

  @ManyToOne(() => User, { cascade: true, eager: true })
  @JoinColumn({ name: "userId", referencedColumnName: "id" })
  user?: User;

  @Column()
  userId?: string;

  @Column()
  role?: CollaboratorRoleEnum;

  @ManyToOne(() => Group, (group) => group.collaborators, { eager: true })
  @JoinColumn({ name: "groupId", referencedColumnName: "id" })
  group?: Group;

  @Column()
  groupId?: string;
}