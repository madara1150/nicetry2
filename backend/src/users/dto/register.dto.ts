import { IsString } from 'class-validator';
export class RegisterDto {
  @IsString()
  readonly fullName: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
}
