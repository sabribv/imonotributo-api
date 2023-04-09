import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class UserGroup extends Document {
  @Prop({ type: SchemaTypes.UUID })
  id: string;
}

export const UserGroupSchema = SchemaFactory.createForClass(UserGroup);
