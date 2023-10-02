import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: 'Please Enter Your Name' })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Please Enter Your vaild Email' })
  @IsEmail()
  email: string;
}

export class ParamDto {
  @ApiProperty({ description: 'Please enter your user id' })
  @IsString()
  id: number;
}
