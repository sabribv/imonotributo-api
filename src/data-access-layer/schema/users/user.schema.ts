import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ type: SchemaTypes.UUID })
  id: string;

  @Prop({ type: SchemaTypes.UUID, ref: 'UserGroup' })
  groupId: string;

  @Prop()
  username: number;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
