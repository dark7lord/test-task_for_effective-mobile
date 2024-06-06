import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { Action } from './action.entity';

@Controller('actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Post()
  async create(@Body() actionData: Action): Promise<Action> {
    return this.actionsService.create(actionData);
  }

  @Get()
  async findAll(
    @Query('userId') userId: number,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<[Action[], number]> {
    return this.actionsService.findAll(userId, page, limit);
  }
}
