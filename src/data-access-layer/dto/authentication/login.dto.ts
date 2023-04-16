import { AuthenticationProvider } from '../../../enum/authentication';

export class LoginDto {
  email: string;
  provider: AuthenticationProvider;
}
