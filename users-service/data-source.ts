import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gopal',
  password: '',
  database: 'users_service',
  entities: [User],
  migrations: ['src/migration/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
