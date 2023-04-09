import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Category, CategorySchema } from './category.schema';

@Schema()
export class Scale extends Document {
  @Prop({ type: SchemaTypes.UUID })
  id: string;

  @Prop()
  name: string;

  @Prop()
  from: Date;

  @Prop()
  to: Date;

  @Prop()
  active: boolean;

  @Prop({ type: [CategorySchema] })
  categories: Category[];
}

export const ScaleSchema = SchemaFactory.createForClass(Scale);
