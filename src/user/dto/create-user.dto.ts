import { IsEmail, IsString, Length, Max, Min } from "class-validator";

export class CreateUserDto {

  name: string;

  @IsEmail()
  email: string;

  password: string;
}
