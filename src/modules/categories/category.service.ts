import { Injectable } from "@nestjs/common";
import type { CommandBus } from "@nestjs/cqrs";
import type { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Transactional } from "typeorm-transactional";
import { CategoryEntity } from "./categories.entity";
import { CreateCategoryDto} from "./dtos/create-category.dto.ts";
import { CreateCategoryCommand } from "./commands/create-category.command.ts";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
            private postRepository: Repository<CategoryEntity>,
            private commandBus: CommandBus,
    ) {}
    @Transactional()
    async createCategory(name: string, createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.commandBus.execute<CreateCategoryCommand, CategoryEntity>(
            new CreateCategoryCommand(name),
        );
    }
    async getAllCategories(): Promise<CategoryEntity[]> {
        return this.postRepository.find();
    }
}