import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserTypeEnum } from '../../../enums/entity/user-type.enum';
import { AppEntity } from '../abstract/app-entity';
import { Profile } from '../profile/profile';

@Entity()
export class User extends AppEntity {

  @Column()
  username?: string;

  @Column()

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  salt?: string;


  @OneToOne(() => Profile, null, { cascade: true, eager: true })
	@JoinColumn({ name: "profileId", referencedColumnName: "id"  })
  profile?: Profile;

}