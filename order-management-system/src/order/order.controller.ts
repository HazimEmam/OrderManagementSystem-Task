import { Controller, Get, Post, Body, Put, Query, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from 'src/dto/OrderDTO';

@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  async createOrder(@Body() createOrderDto: OrderDTO) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get(':orderId')
  async getOrderById(@Param('orderId') orderId: number) {
    return this.orderService.getOrderById(orderId);
  }

  @Put('status')
  async updateOrderStatus(@Body() updateOrderStatusDto: OrderDTO) {
    return this.orderService.updateOrderStatus(updateOrderStatusDto);
  }
}
