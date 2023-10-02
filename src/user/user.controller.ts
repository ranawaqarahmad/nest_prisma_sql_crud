import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ParamDto, UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create-user')
  createNewUser(@Body() userDto: UserDto) {
    try {
      return this.userService.createUser(userDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/get-user-posts')
  getUserPosts(@Query() user: ParamDto) {
    return this.userService.getUserPosts(+user.id);
  }
}
