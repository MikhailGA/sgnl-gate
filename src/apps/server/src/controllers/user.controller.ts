import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { AdvancedApiOperation } from '../utils';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @AdvancedApiOperation()
  @ApiResponse({
    status: 201,
    description: 'User successfully created',
    type: User,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userService.findByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.CONFLICT,
      );
    }

    return await this.userService.create(createUserDto);
  }

  @Get()
  @AdvancedApiOperation()
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [User],
  })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @AdvancedApiOperation()
  @ApiParam({ name: 'id', description: 'User ID', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'User data',
    type: User,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Delete(':id')
  @AdvancedApiOperation()
  @ApiParam({ name: 'id', description: 'User ID', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'User successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    await this.userService.remove(id);
  }

  @Get('stats/count')
  @AdvancedApiOperation()
  @ApiResponse({
    status: 200,
    description: 'Number of users in database',
    schema: {
      type: 'object',
      properties: {
        count: {
          type: 'number',
          description: 'Total number of users',
        },
      },
    },
  })
  async getCount(): Promise<{ count: number }> {
    const count = await this.userService.count();
    return { count };
  }
}
