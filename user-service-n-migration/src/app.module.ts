import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'gopal',
      password: '',
      database: 'users_service',
      autoLoadEntities: true,
      synchronize: true, // В продакшене рекомендуется использовать миграции вместо синхронизации
    }),
    UserModule,
  ],
})
export class AppModule {}