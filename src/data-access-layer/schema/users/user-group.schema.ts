import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema()
export class UserGroup extends Document {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
}

export const UserGroupSchema = SchemaFactory.createForClass(UserGroup);
