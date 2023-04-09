import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class UserTenant extends Document {
  @Prop({ type: SchemaTypes.UUID })
  id: string;

  @Prop({ type: SchemaTypes.UUID, ref: 'User' })
  userId: string;

  @Prop({ type: SchemaTypes.UUID, ref: 'Tenant' })
  tenantId: string;

  @Prop({
    type: String,
    default: 'user',
    enum: ['admin', 'user'],
  })
  role: string;
}

export const UserTenantSchema = SchemaFactory.createForClass(UserTenant);
