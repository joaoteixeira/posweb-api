import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

//jwt-auth.guard.ts

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
