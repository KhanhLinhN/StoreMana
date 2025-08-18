import type { MigrationInterface, QueryRunner } from "typeorm";

export class Orders1755253382984 implements MigrationInterface {
    name?: string | undefined;
    transaction?: boolean | undefined;
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "status_type_enum" AS ENUM('DRAFT', 'ORDERED',  'CANCELED', 'ARRIVED_VN', 'SHIPPED', 'COMPLETED')`);
        await queryRunner.query(
            `CREATE TABLE "orders" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "customer_id" uuid NOT NULL,
                "order_date" TIMESTAMP NOT NULL DEFAULT now(),
                "status" "status_type_enum" NOT NULL DEFAULT 'DRAFT',
                "total_amount" numeric(10,2) NOT NULL,
                "shipping_number" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now()
            )`
        );
    }

    // public async down(queryRunner: QueryRunner): Promise<void> {
    // }

}
