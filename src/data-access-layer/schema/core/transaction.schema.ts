import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ type: SchemaTypes.UUID })
  id: string;

  @Prop({ type: SchemaTypes.UUID, ref: 'Tenant' })
  tenantId: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
