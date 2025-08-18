import { AbstractDto } from "common/dto/abstract.dto";
import type { ProductEntity } from "../product.entity";

export class ProductDto extends AbstractDto {
    name!: string;
    type!: string; 
    price!: number;
    weight?: number;
    description?: string;

    constructor(productEntity: ProductEntity) { 
        super(productEntity);
        this.name = productEntity.name;
        this.type = productEntity.type;
        this.price = productEntity.price;
        this.weight = productEntity.weight;
        this.description = productEntity.description;
    }
    
}