import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersAPIService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersAPIService],
})
export class UsersModule {}
