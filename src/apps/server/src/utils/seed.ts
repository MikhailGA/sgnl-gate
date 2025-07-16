import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { join } from 'path';

export async function seedDatabase() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: join(process.cwd(), '.runtime', 'database.sqlite'),
    entities: [User],
    synchronize: true,
  });

  try {
    await dataSource.initialize();
    console.log('📦 Подключение к базе данных установлено');

    const userRepository = dataSource.getRepository(User);

    // Проверяем, есть ли уже данные
    const existingUsersCount = await userRepository.count();
    if (existingUsersCount > 0) {
      console.log(`📋 В базе уже есть ${existingUsersCount} пользователей`);
      return;
    }

    // Создаем тестовых пользователей
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
      const user = userRepository.create(userData);
      await userRepository.save(user);
      console.log(`✅ Создан пользователь: ${userData.name}`);
    }

    console.log('🎉 Тестовые данные успешно добавлены!');
  } catch (error) {
    console.error('❌ Ошибка при создании тестовых данных:', error);
  } finally {
    await dataSource.destroy();
  }
}

// Запускаем сид, если файл вызван напрямую
if (require.main === module) {
  seedDatabase();
}
