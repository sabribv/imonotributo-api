import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Scale,
  ScaleSchema,
} from '../../data-access-layer/schema/shared/scale.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scale.name, schema: ScaleSchema }]),
  ],
  controllers: [SharedController],
  providers: [SharedService],
})
export class SharedModule {}
