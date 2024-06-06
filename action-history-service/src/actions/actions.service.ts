import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from './action.entity';

@Injectable()
export class ActionsService {
  constructor(
    @InjectRepository(Action)
    private actionsRepository: Repository<Action>,
  ) {}

  async create(action: Action): Promise<Action> {
    return this.actionsRepository.save(action);
  }

  async findAll(userId: number, page: number, limit: number): Promise<[Action[], number]> {
    return this.actionsRepository.findAndCount({
      where: { userId },
      order: { timestamp: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
  }
}
