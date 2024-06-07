import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUsers1629191207452 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 0; i < 1000000; i++) {
      await queryRunner.query(
        `INSERT INTO "user" (firstName, lastName, age, gender, hasProblems)
         VALUES ($1, $2, $3, $4, $5)`,
        [
          `FirstName${i}`,
          `LastName${i}`,
          Math.floor(Math.random() * 60) + 18,
          Math.random() > 0.5 ? 'Male' : 'Female',
          Math.random() > 0.5,
        ],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user"`);
  }
}
