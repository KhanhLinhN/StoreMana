import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { ProductDto } from './dtos/product.dto.ts';
import { CategoryEntity } from '../categories/categories.entity.ts';
import { ProductType } from '../../constants/product_type_enum.ts';

@Entity({ name: 'products' })
@UseDto(ProductDto)
export class ProductEntity extends AbstractEntity<ProductDto> {
    @Column({ type: 'varchar', unique: true })
    name!: string;
    
    @Column({ type: 'enum', enum: ProductType, default: ProductType.PRE_ORDER })
    type!: ProductType;
    
    @Column({ type: 'numeric', precision: 10, scale: 2 })
    price!: number;
    
    @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
    weight?: number;
    
    @Column({ type: 'text', nullable: true })
    description?: string;
    
    @OneToMany(() => CategoryEntity, (category) => category.products)
    category?: CategoryEntity;
}
