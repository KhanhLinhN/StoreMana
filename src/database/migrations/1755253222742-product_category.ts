import type { MigrationInterface, QueryRunner } from "typeorm";

export class ProductCategory1755253222742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "product_category" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "product_id" uuid NOT NULL,
                "category_id" uuid NOT NULL,
                CONSTRAINT "PK_8a2b1c3f5d6e7f8a9b0c1d2e3f4" PRIMARY KEY ("id"),
                CONSTRAINT "FK_product_id" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_category_id" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
