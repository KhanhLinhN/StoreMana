import { IsString, Length } from 'class-validator';
import { CreateTranslationDto } from '../../../common/dto/create-translation.dto.ts';
import { TranslationsField } from '../../../decorators/field.decorators.ts';

export class CreateCategoryDto {
  @IsString()
  name: string | undefined;
}
