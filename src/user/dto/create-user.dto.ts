import { IsEmail, IsString, Length, Max, Min } from "class-validator";

export class CreateUserDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
