import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { User } from './user.schema';
import { Tenant } from './tenant.schema';

@Schema()
export class UserTenant extends Document {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: User.name })
  userId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: Tenant.name })
  tenantId: Types.ObjectId;

  @Prop({
    type: String,
    default: 'user',
    enum: ['admin', 'user'],
  })
  role: string;
}

export const UserTenantSchema = SchemaFactory.createForClass(UserTenant);
