import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class Tenant extends Document {
  @Prop({ type: SchemaTypes.UUID })
  id: string;
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
