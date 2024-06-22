import { Controller, Get, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Controller('bff')
export class BffController {
  constructor(private readonly httpService: HttpService) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    console.log(loginDto);
    return this.httpService
      .post('http://35.202.134.215:3002/auth/login', loginDto)
      .pipe(map(response => response.data));
  }

  @Post('register')
  async register(@Body() registerDto: { username: string; password: string }) {
    console.log(registerDto);
    return this.httpService
      .post('http://35.202.134.215:3002/auth/register', registerDto)
      .pipe(map(response => response.data));
  }

  @Get('profile')
  async getProfile() {
    return this.httpService
      .get('http://35.202.134.215:3002/users/profile')
      .pipe(map(response => response.data));
  }
}
