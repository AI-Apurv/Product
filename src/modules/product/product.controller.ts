import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from './product.service';
import { createProductDto } from './dto/product.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(@Body() createProductDto: createProductDto) {
    const generatedId = await this.productsService.createProduct(
      createProductDto.name ,
      createProductDto.description,
      createProductDto.price
    );
    console.log('^^^^^^^^^^^^^^^^^^^^^^^',generatedId);
    return { generatedId };
}
}