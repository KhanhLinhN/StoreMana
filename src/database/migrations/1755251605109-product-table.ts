import type { MigrationInterface, QueryRunner } from "typeorm";

export class ProductTable1755251605109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "product_type_enum" AS ENUM('IN_STOCK', 'PRE_ORDER')`);

        await queryRunner.query(
            `CREATE TABLE "products" (
                "id" uuid   NOT NULL DEFAULT    uuid_generate_v4(),
                "name"  character varying NOT NULL,
                "type" "public"."products_type_enum" NOT NULL,
                "price" numeric(10,2),
                "weight" numeric(10,2),
                "description" text,
                "details" text,
                "stock" integer,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a5d976312812b12f3b142602b99" PRIMARY KEY ("id")
            )`);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
        await queryRunner.query(`DROP TYPE "product_type_enum"`);
    }

}
