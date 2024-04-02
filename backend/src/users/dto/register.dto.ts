import { IsString } from 'class-validator';
export class RegisterDto {
  @IsString()
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly tel: string;
}
