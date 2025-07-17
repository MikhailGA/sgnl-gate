import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { FolderService } from '../services/folder.service';
import { CreateFolderDto } from '../dto/create-folder.dto';
import { UpdateFolderDto } from '../dto/update-folder.dto';
import { FolderDto, RootFolderDto } from '../dto/folder.dto';
import { Folder } from '../entities/folder.entity';
import { AdvancedApiOperation } from '../utils';

@ApiTags('Folders')
@Controller('folders')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @Post()
  @AdvancedApiOperation()
  @ApiResponse({
    status: 201,
    description: 'Folder successfully created',
    type: Folder,
  })
  async create(@Body() createFolderDto: CreateFolderDto): Promise<Folder> {
    try {
      return await this.folderService.create(createFolderDto);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create folder',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @AdvancedApiOperation()
  @ApiResponse({
    status: 200,
    description: 'List of all folders',
    type: [Folder],
  })
  async findAll(): Promise<Folder[]> {
    return await this.folderService.findAll();
  }

  @Get('roots')
  @AdvancedApiOperation()
  @ApiResponse({
    status: 200,
    description: 'List of all root folders',
    type: [RootFolderDto],
  })
  async getRootFolders(): Promise<RootFolderDto[]> {
    const folders = await this.folderService.getRootFolders();
    return folders.map((folder) => Folder.toRootDto(folder));
  }

  @Get('tree/:rootId')
  @AdvancedApiOperation()
  @ApiParam({ name: 'rootId', description: 'Root folder ID' })
  @ApiResponse({
    status: 200,
    description: 'Root folder with complete tree structure by ID',
    type: FolderDto,
    schema: {
      oneOf: [{ $ref: '#/components/schemas/FolderDto' }, { type: 'null' }],
    },
  })
  async getTreeByRootId(
    @Param('rootId', ParseIntPipe) rootId: number,
  ): Promise<FolderDto | null> {
    const folder = await this.folderService.getTree(rootId);
    return folder ? Folder.toDto(folder) : null;
  }

  @Get(':id')
  @AdvancedApiOperation()
  @ApiParam({ name: 'id', description: 'Folder ID' })
  @ApiResponse({
    status: 200,
    description: 'Folder details',
    type: Folder,
  })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Folder> {
    return await this.folderService.findOne(id);
  }

  @Get(':id/descendants')
  @AdvancedApiOperation()
  @ApiParam({ name: 'id', description: 'Folder ID' })
  @ApiResponse({
    status: 200,
    description: 'Folder descendants',
    type: [Folder],
  })
  async getDescendants(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Folder[]> {
    return await this.folderService.getDescendants(id);
  }

  @Get(':id/ancestors')
  @AdvancedApiOperation()
  @ApiParam({ name: 'id', description: 'Folder ID' })
  @ApiResponse({
    status: 200,
    description: 'Folder ancestors',
    type: [Folder],
  })
  async getAncestors(@Param('id', ParseIntPipe) id: number): Promise<Folder[]> {
    return await this.folderService.getAncestors(id);
  }

  @Put(':id')
  @AdvancedApiOperation()
  @ApiParam({ name: 'id', description: 'Folder ID' })
  @ApiResponse({
    status: 200,
    description: 'Folder successfully updated',
    type: Folder,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFolderDto: UpdateFolderDto,
  ): Promise<Folder> {
    try {
      return await this.folderService.update(id, updateFolderDto);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to update folder',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  @AdvancedApiOperation()
  @ApiParam({ name: 'id', description: 'Folder ID' })
  @ApiResponse({
    status: 200,
    description: 'Folder successfully deleted',
  })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.folderService.remove(id);
  }
}
