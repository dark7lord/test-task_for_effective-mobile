import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async updateProblemsFlag(): Promise<number> {
    const usersWithProblems = await this.usersRepository.count({
      where: { problems: true },
    });

    await this.usersRepository.update({ problems: true }, { problems: false });

    return usersWithProblems;
  }
}