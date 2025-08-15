import type { MigrationInterface, QueryRunner } from "typeorm";

export class Orders1755253382984 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "status_type_enum" AS ENUM('DRAFT', 'ORDERED',  'CANCELED', 'ARRIVED_VN', 'SHIPPED', 'COMPLETED')`);
        await queryRunner.query(
            `CREATE TABLE "orders" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "customer_id" uuid NOT NULL,
                "order_date" TIMESTAMP NOT NULL DEFAULT now(),
                "status" character varying NOT NULL,
                "total_amount" numeric(10,2) NOT NULL,
                "shipping_number" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_8a2b1c3f5d6e7f8a9b0c1d2e3f4" PRIMARY KEY ("id"),
                CONSTRAINT "FK_customer_id" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
