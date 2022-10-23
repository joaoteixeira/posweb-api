import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { TokenProps } from './interfaces/token.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(data: LoginDto) {
    const user = await this.validateUser(data.email, data.password);

    const payload = { email: user.email, sub: user.id };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }

  private async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if(!user) throw new BadRequestException('E-mail or password is incorrect');

    if (user.password !== password) throw new BadRequestException('E-mail or password is incorrect');

    return user;  
  }

  // async refreshToken(token: string) {
  //   try {

  //     const tokenDecode = await this.jwtService.verifyAsync(token) as TokenProps;

  //     const payload = { email: tokenDecode.email, sub: tokenDecode.sub };

  //     const new_token = this.jwtService.sign(payload);

  //     return { token: new_token };

  //   } catch (err) {
  //     throw new BadRequestException(err.message);
  //   }
  // }
}
