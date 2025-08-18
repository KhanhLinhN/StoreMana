import type { ICommand } from '@nestjs/cqrs';

import type { CreateCategoryDto } from '../dtos/create-category.dto.ts';

export class CreateCategoryCommand implements ICommand {
  constructor(
    public readonly name: string
  ) {}
}
