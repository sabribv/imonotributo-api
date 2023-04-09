import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  User,
  UserSchema,
} from '../../data-access-layer/schema/users/user.schema';
import {
  Tenant,
  TenantSchema,
} from '../../data-access-layer/schema/users/tenant.schema';
import {
  UserTenant,
  UserTenantSchema,
} from '../../data-access-layer/schema/users/user-tenant.schema';
import {
  UserGroup,
  UserGroupSchema,
} from '../../data-access-layer/schema/users/user-group.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tenant.name, schema: TenantSchema },
      { name: User.name, schema: UserSchema },
      { name: UserGroup.name, schema: UserGroupSchema },
      { name: UserTenant.name, schema: UserTenantSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
