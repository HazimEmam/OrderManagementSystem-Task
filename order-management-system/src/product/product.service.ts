import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService){}
  
  async AddProduct(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({data: createProductDto})
  }
}
