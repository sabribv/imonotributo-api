import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '350192678902-48sltcl1v6chn0gffvfitpcc37qvp2hh.apps.googleusercontent.com', // <- Replace this with your client id
      clientSecret: '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', // <- Replace this with your client secret
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
      scope: ['profile'],
    });
    /*
    TODO: Rather, use environment variables. A good way to do this in Nest.js is by creating a configService as described in the docs.
     */
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function,
  ) {
    try {
      console.log(profile);

      const jwt: string = await this.authService.validateOAuthLogin(
        profile.id,
        Provider.GOOGLE,
      );
      const user = {
        jwt,
      };

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
