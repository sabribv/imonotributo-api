import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Persona,
  PersonaSchema,
} from '../../data-access-layer/schema/core/persona.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Persona.name, schema: PersonaSchema }]),
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
