import { Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('update-problems')
  async updateProblemsFlag(@Res() res: Response): Promise<void> {
    const count = await this.userService.updateProblemsFlag();
    res.status(200).json({ count });
  }
}