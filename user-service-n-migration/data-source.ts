import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gopal',
  password: '',
  database: 'users_service',
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});