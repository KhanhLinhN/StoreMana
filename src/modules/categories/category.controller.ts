import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { RoleType } from "constants/role-type";
import { Auth } from "decorators/http.decorators";
import { CategoryDto } from "./dtos/category.dto";
import type { CreateCategoryDto } from "./dtos/create-category.dto";
import { AuthUser } from "decorators/auth-user.decorator";
import type { UserEntity } from "modules/user/user.entity";
import { CategoryEntity } from "./categories.entity";
import { UseLanguageInterceptor } from "interceptors/language-interceptor.service";
import { ApiPageResponse } from "decorators/api-page-response.decorator";

@Controller('categories')
export class CategoryController {
    CategoryService: any;
    @Post()
    @Auth([RoleType.USER])
    @HttpCode(HttpStatus.CREATED)
    @ApiCreatedResponse({ type: CategoryDto })
    async createCategory(
      @Body() CreateCategoryDto: CreateCategoryDto,
      @AuthUser() user: UserEntity,
    ) {
      const categoryEntity = await this.CategoryService.createCategory(
        CreateCategoryDto.name,
      );
  
      return categoryEntity.toDto();
    }

      @Get()
      @Auth([RoleType.USER])
      @UseLanguageInterceptor()
      @ApiPageResponse({ type: CategoryDto })
      async getPosts(
        @Query() postsPageOptionsDto: PostPageOptionsDto,
      ): Promise<PageDto<PostDto>> {
        return this.postService.getAllPost(postsPageOptionsDto);
      }
    
      @Get(':id')
      @Auth([])
      @HttpCode(HttpStatus.OK)
      @ApiUUIDParam('id')
      @ApiOkResponse({ type: PostDto })
      async getSinglePost(@UUIDParam('id') id: Uuid): Promise<PostDto> {
        const entity = await this.postService.getSinglePost(id);
    
        return entity.toDto();
      }
}   

