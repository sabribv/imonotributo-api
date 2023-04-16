import { Injectable } from '@nestjs/common';
import { LoginDto } from '../../data-access-layer/dto/authentication/login.dto';
import { UsersService } from '../../business-logic-layer/users.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userService: UsersService) {}

  async login(loginData: LoginDto) {
    return await this.userService.authenticate(
      loginData.email,
      loginData.provider,
    );
  }
}
