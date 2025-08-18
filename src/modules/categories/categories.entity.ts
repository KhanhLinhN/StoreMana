import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity.ts';
import { UseDto } from '../../decorators/use-dto.decorator.ts';
import { CategoryDto } from './dtos/category.dto.ts';
import { ProductEntity } from '../product/product.entity.ts'; 

@Entity({ name: 'categories' })
@UseDto(CategoryDto)
export class CategoryEntity extends AbstractEntity<CategoryDto> {
    
  @Column({ type: 'varchar', unique: true })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products?: ProductEntity[];
}