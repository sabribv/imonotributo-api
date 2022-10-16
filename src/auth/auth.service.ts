import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  /*
    TODO: Rather, use environment variables. A good way to do this in Nest.js is by creating a configService as described in the docs.
     */
  private readonly JWT_SECRET_KEY =
    'Z9A2qhoPjcQONAuDI6nD8nep0JpKGaI0BEVymCEb+H+YURqPZ1kjZ5M4z5FmrnaSYcf8nrylX25gQJjwwOXC5BminEDMA8a5lhpw2ZsUEJT9gtTz8jELI/+z8h4t+4GWX0CbQRbs18KzydC/pR+QpbqqmMBiie6vL/KN8BJ3nAlWp8VRQPnk/msOdao8FW9GdxAW0CD66IMSLy0aSy0EhW1+d1E+oyM/IJT3YQkYTyCBDgketgZgRQHORbYheXgcntQHLYbVg7x42TQunuUegwiWOb9ml4b13FncfGc+s+h2LQyEQZbxx8sMic2t5GvNPqRt07/XyoTr7RbwDLwTBg=='; // <- replace this with your secret key

  constructor(/*private readonly usersService: UsersService*/) {}

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

      // if (!user)
      // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);

      const payload = {
        thirdPartyId,
        provider,
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 3600,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
}
