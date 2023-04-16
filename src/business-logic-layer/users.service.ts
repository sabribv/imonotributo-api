import { Injectable } from '@nestjs/common';
import { AuthenticationDALService } from '../data-access-layer/services/authentication.service';
import { AuthenticatedUser } from '../models/authenticated-user.model';

@Injectable()
export class UsersService {
  constructor(private authenticationDALService: AuthenticationDALService) {}

  async authenticate(
    username: string,
    provider: string,
  ): Promise<AuthenticatedUser> {
    const user = await this.authenticationDALService.findUser(
      username,
      provider,
    );

    if (user) {
      const personas = await this.authenticationDALService.getPersonas(
        user._id,
      );
      return {
        id: user._id,
        username: user.username,
        provider: user.provider,
        personas,
      };
    } else {
      return Promise.reject();
    }
  }
}
