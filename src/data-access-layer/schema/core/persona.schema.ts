import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Transaction, TransactionSchema } from './transaction.schema';
import { Category, CategorySchema } from '../shared/category.schema';

@Schema()
export class Persona extends Document {
  @Prop()
  id: number;

  @Prop({ type: SchemaTypes.UUID, ref: 'Tenant' })
  tenantId: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ type: [TransactionSchema] })
  transactions: Transaction[];

  @Prop({ type: CategorySchema })
  currentCategory: Category;

  @Prop({ type: [CategorySchema] })
  history: Category[];
}

export const PersonaSchema = SchemaFactory.createForClass(Persona);
