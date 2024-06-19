import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, DatabaseModule, CartModule, OrderModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
