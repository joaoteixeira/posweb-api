import { IsEmail, IsString, Length, Max, Min } from "class-validator";

export class CreateUserDto {

  @IsString()
  @Min(3)
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @Min(8)
  @Max(20)
  password: string;
}
