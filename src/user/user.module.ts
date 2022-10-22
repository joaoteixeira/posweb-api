import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { providers } from '../providers';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...providers, UserService],
  exports: [UserService],
})
export class UserModule {}
