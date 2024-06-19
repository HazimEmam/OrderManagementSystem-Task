import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { OrderDTO } from 'src/dto/OrderDTO';

@Injectable()
export class OrderService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createOrder(createOrderDto: OrderDTO) {
    const { userId } = createOrderDto;
    const cart = await this.databaseService.cart.findFirst({
      where: { userId },
      include: {
        productItem: true,
      },
    });

    if (cart && cart.productItem.length > 0) {
      const order = await this.databaseService.order.create({
        data: {
          userId,
          status: 'Pending',
        },
      });

      const orderProducts = cart.productItem.map((product) => ({
        orderId: order.orderId,
        productId: product.productId,
        quantity: product.quantity,
      }));

      await this.databaseService.productXOrder.createMany({
        data: orderProducts,
      });

      await this.databaseService.productXCart.deleteMany({
        where: { cartId: cart.cartId },
      });

      return order;
    }
    throw new Error('Cart is empty or not found');
  }

  async getOrderById(orderId: number) {
    return this.databaseService.order.findUnique({
      where: { orderId: Number(orderId) },
      include: {
        orderItems: {
          include: {
            order: true,
          },
        },
      },
    });
  }
  async updateOrderStatus(data: OrderDTO) {
    const { orderId, status } = data;
    return this.databaseService.order.update({
      where: { orderId },
      data: { status },
    });
  }
}
