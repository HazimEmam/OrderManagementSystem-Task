import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, DatabaseModule, CartModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
