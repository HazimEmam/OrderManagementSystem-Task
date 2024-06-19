import { Controller, Get, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from 'src/dto/CartDTO';

@Controller('api/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(@Body() addToCartDto: CartDto) {
    return this.cartService.addToCart(addToCartDto);
  }

  @Get()
  async getCart(@Query('userId') userId: number) {
    return this.cartService.getCart(userId);
  }

  @Put('update')
  async updateCart(@Body() updateCartDto: CartDto) {
    return this.cartService.updateCart(updateCartDto);
  }

  @Delete('remove')
  async removeFromCart(@Body('userId') userId: number, @Body('productId') productId: number) {
    return this.cartService.removeFromCart(userId, productId);
  }

}
