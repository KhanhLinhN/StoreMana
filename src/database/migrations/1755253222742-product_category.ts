import type { MigrationInterface, QueryRunner } from "typeorm";

export class ProductCategory1755253222742 implements MigrationInterface {
    name?: string | undefined;
    transaction?: boolean | undefined;
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product_category');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "product_category" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "product_id" uuid NOT NULL,
                "category_id" uuid NOT NULL,
                CONSTRAINT "FK_product_id" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_category_id" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION
            )`
        );
    }

    // public async down(queryRunner: QueryRunner): Promise<void> {
    // }

}
