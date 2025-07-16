import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User name', example: 'John Doe' })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'john@example.com',
  })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({
    description: 'User age',
    example: 25,
    required: false,
    minimum: 1,
    maximum: 150,
  })
  @IsOptional()
  @IsInt({ message: 'Age must be an integer' })
  @Min(1, { message: 'Age must be greater than 0' })
  @Max(150, { message: 'Age must be less than 150' })
  age?: number;
}
