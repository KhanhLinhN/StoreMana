import type { MigrationInterface, QueryRunner } from "typeorm";

export class Customers1755253114115 implements MigrationInterface {
    name?: string | undefined;
    transaction?: boolean | undefined;
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customers');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "customers" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "facebook_link" character varying NOT NULL,
                "phone" character varying,
                "address" text,
                "receiver_name" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now()
            )`
        );
    }

    // public async down(queryRunner: QueryRunner): Promise<void> {
    // }

}
