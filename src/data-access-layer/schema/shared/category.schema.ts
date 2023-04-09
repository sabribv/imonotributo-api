import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop({ type: SchemaTypes.UUID })
  id: string;

  @Prop()
  max: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
