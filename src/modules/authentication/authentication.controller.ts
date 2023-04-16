import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginDto } from '../../data-access-layer/dto/authentication/login.dto';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.authenticationService.login(loginDto);
      return user;
    } catch (error) {
      throw new HttpException(
        'El usuario y/o password son incorrectos.',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
