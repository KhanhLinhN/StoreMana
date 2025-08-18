import type { MigrationInterface, QueryRunner } from "typeorm";

export class OrderItems1755253847911 implements MigrationInterface {
    name?: string | undefined;
    transaction?: boolean | undefined;
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order_items');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "order_items" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "order_id" uuid NOT NULL,
                "product_id" uuid NOT NULL,
                "quantity" integer NOT NULL,
                "price" numeric(10,2) NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now()
            )`
        );
    }

    // public async down(queryRunner: QueryRunner): Promise<void> {
    // }

}
