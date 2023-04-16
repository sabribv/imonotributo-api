import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { UserGroup } from './user-group.schema';

@Schema()
export class User extends Document {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: UserGroup.name })
  groupId: Types.ObjectId;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({
    type: String,
    default: 'google',
    enum: ['google', 'facebook', 'email'],
  })
  provider: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
