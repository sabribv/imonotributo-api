import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Transaction, TransactionSchema } from './transaction.schema';
import { Category, CategorySchema } from '../shared/category.schema';
import { Tenant } from '../users/tenant.schema';

@Schema()
export class Persona extends Document {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: Tenant.name })
  tenantId: Types.ObjectId;

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
