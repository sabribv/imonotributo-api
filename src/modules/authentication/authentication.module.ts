import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { DataAccessLayerModule } from '../../data-access-layer/data-access-layer.module';
import { BusinessLogicLayerModule } from '../../business-logic-layer/business-logic-layer.module';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  imports: [BusinessLogicLayerModule, DataAccessLayerModule],
})
export class AuthenticationModule {}
