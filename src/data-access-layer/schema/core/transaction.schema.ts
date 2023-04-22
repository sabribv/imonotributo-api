import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Tenant } from '../users/tenant.schema';

@Schema()
export class Transaction extends Document {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: Tenant.name })
  tenantId: Types.ObjectId;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
