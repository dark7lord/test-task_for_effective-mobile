import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';
import { Action } from './action.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Action])],
  providers: [ActionsService],
  controllers: [ActionsController],
})
export class ActionsModule {}
