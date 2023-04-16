import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/users/user.schema';
import { Persona } from '../schema/core/persona.schema';
import { UserTenant } from '../schema/users/user-tenant.schema';

@Injectable()
export class AuthenticationDALService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Persona.name) private personaModel: Model<Persona>,
    @InjectModel(UserTenant.name) private userTenant: Model<UserTenant>,
  ) {}

  async findUser(username: string, provider: string): Promise<User> {
    const user = await this.userModel.findOne({ username, provider }).exec();
    return user;
  }

  async getPersonas(userId: Types.ObjectId): Promise<Persona[]> {
    const tenants = await this.userTenant.find({ userId });

    const personas = [];
    for (let i = 0; i < tenants.length; i++) {
      personas.push(
        ...(await this.personaModel.find({ tenantId: tenants[i].tenantId })),
      );
    }

    return personas;
  }
}
