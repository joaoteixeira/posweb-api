import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }

    

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(@Request() req) {
        return req.user;
    }

    // @Post('refresh-token')
    // refresh(@Body() data: TokenDto) {
    //     return this.authService.refreshToken(data.token);
    // }
}
