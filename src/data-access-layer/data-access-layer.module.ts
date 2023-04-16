import { Module } from '@nestjs/common';
import { AuthenticationDALService } from './services/authentication.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, PersonaSchema } from './schema/core/persona.schema';
import { Scale, ScaleSchema } from './schema/shared/scale.schema';
import { Tenant, TenantSchema } from './schema/users/tenant.schema';
import { User, UserSchema } from './schema/users/user.schema';
import { UserGroup, UserGroupSchema } from './schema/users/user-group.schema';
import {
  UserTenant,
  UserTenantSchema,
} from './schema/users/user-tenant.schema';

const coreSchemas = [{ name: Persona.name, schema: PersonaSchema }];

const sharedSchemas = [{ name: Scale.name, schema: ScaleSchema }];

const usersSchemas = [
  { name: Tenant.name, schema: TenantSchema },
  { name: User.name, schema: UserSchema },
  { name: UserGroup.name, schema: UserGroupSchema },
  { name: UserTenant.name, schema: UserTenantSchema },
];

@Module({
  imports: [
    MongooseModule.forFeature([
      ...coreSchemas,
      ...sharedSchemas,
      ...usersSchemas,
    ]),
  ],
  providers: [AuthenticationDALService],
  exports: [AuthenticationDALService],
})
export class DataAccessLayerModule {}
