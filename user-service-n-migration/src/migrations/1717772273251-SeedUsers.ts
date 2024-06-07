import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../user/user.entity';

export class SeedUsers1617771696351 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i < 1000000; i++) {
      await queryRunner.manager.insert(User, {
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        age: Math.floor(Math.random() * 100),
        gender: Math.random() > 0.5 ? 'Male' : 'Female',
        hasProblems: Math.random() > 0.5,
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user"`);
  }
}
