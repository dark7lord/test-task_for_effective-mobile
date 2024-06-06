import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'gopal',
      password: '',
      database: 'history_service',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ActionsModule,
  ],
})
export class AppModule {}
