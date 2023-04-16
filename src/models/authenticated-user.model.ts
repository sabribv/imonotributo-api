import { Persona } from '../data-access-layer/schema/core/persona.schema';
import { Types } from 'mongoose';

export interface AuthenticatedUser {
  id: Types.ObjectId;
  username: string;
  provider: string;
  personas: Persona[];
}
