import { AbstractDto } from "common/dto/abstract.dto";
import type { CategoryEntity } from "modules/categories/categories.entity";

export class CategoryDto extends AbstractDto{
    name!: string;
    description?: string;
    
    constructor(categoryEntity: CategoryEntity) {
        super(categoryEntity);
        this.name = categoryEntity.name;
        this.description = categoryEntity.description;
    }
}