import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserService } from './user.service';
import { FolderService } from './folder.service';
import { FolderSeedNode } from '../types/folder-seed.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DatabaseSeedService implements OnApplicationBootstrap {
  constructor(
    private userService: UserService,
    private folderService: FolderService,
  ) {}

  async onApplicationBootstrap() {
    console.log('🔄 Clearing and seeding data...');

    try {
      await this.clearDatabase();
      await this.seedUsers();
      await this.seedFolders();
    } catch (error) {
      console.error('❌ Error during automatic seeding:', error);
    }
  }

  private async clearDatabase(): Promise<void> {
    console.log('🗑️ Clearing database...');

    try {
      // Delete all folders (children first, then parents)
      await this.folderService.clear();

      // Delete all users
      await this.userService.clear();

      console.log('✅ Database cleared');
    } catch (error) {
      console.error('❌ Error clearing database:', error);
      throw error;
    }
  }

  private async seedUsers(): Promise<void> {
    console.log('👥 Creating test users...');

    const testUsers = [
      {
        name: 'John Doe',
        email: 'ivan@example.com',
        age: 25,
      },
      {
        name: 'Jane Smith',
        email: 'maria@example.com',
        age: 30,
      },
      {
        name: 'Alex Johnson',
        email: 'alexey@example.com',
      },
    ];

    for (const userData of testUsers) {
      await this.userService.create(userData);
      console.log(`✅ User created: ${userData.name}`);
    }

    console.log('🎉 Test users successfully added!');
  }

  private async seedFolders(): Promise<void> {
    console.log('📁 Creating folder structure from JSON files...');

    try {
      // Path to seeds folder relative to project root
      const seedsPath = path.join(process.cwd(), 'seeds/folders');
      const jsonFiles = fs
        .readdirSync(seedsPath)
        .filter((file) => file.endsWith('.json'));

      if (jsonFiles.length === 0) {
        console.log('⚠️  No JSON files for folder seeding');
        return;
      }

      // Create structure from each JSON file
      for (const jsonFile of jsonFiles) {
        const filePath = path.join(seedsPath, jsonFile);

        console.log(`📄 Processing file: ${jsonFile}`);

        const jsonContent = fs.readFileSync(filePath, 'utf8');
        const rootNode: FolderSeedNode = JSON.parse(jsonContent);

        await this.createFolderFromSeedNode(rootNode);

        console.log(`✅ Structure from ${jsonFile} created successfully!`);
      }

      console.log(
        `🎉 Created ${jsonFiles.length} independent folder structures!`,
      );
    } catch (error) {
      console.error('❌ Error creating folders from JSON:', error);
      throw error;
    }
  }

  private async createFolderFromSeedNode(
    node: FolderSeedNode,
    parentId?: number,
  ): Promise<void> {
    const folder = await this.folderService.create({
      name: node.name,
      permissions: node.permissions,
      parentId,
    });

    console.log(`✅ Folder created: ${node.name}`);

    // Recursively create child folders
    for (const child of node.children) {
      await this.createFolderFromSeedNode(child, folder.id);
    }
  }
}
