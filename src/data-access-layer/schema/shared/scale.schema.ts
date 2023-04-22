import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaTypes, Types} from 'mongoose';
import { Category, CategorySchema } from './category.schema';

@Schema()
export class Scale extends Document {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

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
