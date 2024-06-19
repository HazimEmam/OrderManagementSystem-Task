import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('Add')
  AddProduct(@Body() createProductDto: Prisma.ProductCreateInput) {
    return this.productService.AddProduct(createProductDto);
  }
}
