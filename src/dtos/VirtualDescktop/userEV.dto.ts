import { IsString } from 'class-validator';

export class UserEVDto {
  @IsString()
  public login: string;

  @IsString()
  public password: string;
}
