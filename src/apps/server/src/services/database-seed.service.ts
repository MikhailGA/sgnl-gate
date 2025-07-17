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
    console.log('🔄 Очистка и сидирование данных...');

    try {
      await this.clearDatabase();
      await this.seedUsers();
      await this.seedFolders();
    } catch (error) {
      console.error('❌ Ошибка при автоматическом сидировании:', error);
    }
  }

  private async clearDatabase(): Promise<void> {
    console.log('🗑️ Очистка базы данных...');

    try {
      // Удаляем все папки (сначала детей, потом родителей)
      await this.folderService.clear();

      // Удаляем всех пользователей
      await this.userService.clear();

      console.log('✅ База данных очищена');
    } catch (error) {
      console.error('❌ Ошибка при очистке базы данных:', error);
      throw error;
    }
  }

  private async seedUsers(): Promise<void> {
    console.log('👥 Создание тестовых пользователей...');

    const testUsers = [
      {
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        age: 25,
      },
      {
        name: 'Мария Петрова',
        email: 'maria@example.com',
        age: 30,
      },
      {
        name: 'Алексей Сидоров',
        email: 'alexey@example.com',
      },
    ];

    for (const userData of testUsers) {
      await this.userService.create(userData);
      console.log(`✅ Создан пользователь: ${userData.name}`);
    }

    console.log('🎉 Тестовые пользователи успешно добавлены!');
  }

  private async seedFolders(): Promise<void> {
    console.log('📁 Создание структуры папок из JSON файлов...');

    try {
      // Путь к папке seeds относительно корня проекта
      const seedsPath = path.join(
        process.cwd(),
        'apps/server/src/seeds/folders',
      );
      const jsonFiles = fs
        .readdirSync(seedsPath)
        .filter((file) => file.endsWith('.json'));

      if (jsonFiles.length === 0) {
        console.log('⚠️  Нет JSON файлов для сидирования папок');
        return;
      }

      // Создаем структуру из каждого JSON файла
      for (const jsonFile of jsonFiles) {
        const filePath = path.join(seedsPath, jsonFile);

        console.log(`📄 Обработка файла: ${jsonFile}`);

        const jsonContent = fs.readFileSync(filePath, 'utf8');
        const rootNode: FolderSeedNode = JSON.parse(jsonContent);

        await this.createFolderFromSeedNode(rootNode);

        console.log(`✅ Структура из ${jsonFile} создана успешно!`);
      }

      console.log(`🎉 Создано ${jsonFiles.length} независимых структур папок!`);
    } catch (error) {
      console.error('❌ Ошибка при создании папок из JSON:', error);
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

    console.log(`✅ Создана папка: ${node.name}`);

    // Рекурсивно создаем дочерние папки
    for (const child of node.children) {
      await this.createFolderFromSeedNode(child, folder.id);
    }
  }
}
