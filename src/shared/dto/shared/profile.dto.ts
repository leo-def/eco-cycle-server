import { ApiProperty } from "@nestjs/swagger";
import { AppEntityDto } from "./app-entity.dto";

export class ProfileDto extends AppEntityDto {

  @ApiProperty()
  name?: string;

}
