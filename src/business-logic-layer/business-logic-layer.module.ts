import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [DataAccessLayerModule],
})
export class BusinessLogicLayerModule {}
