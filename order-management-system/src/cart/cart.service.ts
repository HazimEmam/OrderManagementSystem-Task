import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CartDto } from 'src/dto/CartDTO';

@Injectable()
export class CartService {
  constructor(private readonly databaseServices : DatabaseService){}

  async addToCart(data : CartDto){
    const {userId , productId, quantity} = data
    const cart = await this.databaseServices.cart.findUnique({
      where: { userId },
    })

    if(cart){
      const productInCart = await this.databaseServices.productXCart.findFirst({
        where: {cartId:cart.cartId, productId},
      })
      if(productInCart){
        return this.databaseServices.productXCart.update({
          where: { id :productInCart.productId},
          data:{
            quantity : productInCart.quantity + quantity,
          }
        })
      }else{
        return this.databaseServices.productXCart.create({
          data:{
            cartId: cart.cartId,
            productId,
            quantity
          }
        })
      }
    }else{
      const newCart = await this.databaseServices.cart.create({
        data :{userId},
      });
      return this.databaseServices.productXCart.create({
        data:{
          cartId: newCart.cartId,
          productId,
          quantity,
        }
      })
    }
  }

  async getCart(userId: number){
    return this.databaseServices.cart.findMany({
      where:{userId},
      include:{
        productItem:{
          include:{
            product: true,
          }
        }
      }
    })
  }
  async updateCart(data : CartDto){
    const {userId , productId , quantity} = data;
    const cart = await this.databaseServices.cart.findFirst({
      where: {userId},
    })

    if(cart){
      const productInCart = await this.databaseServices.productXCart.findFirst({
        where:{productId}
      })
      if(productInCart){
        return this.databaseServices.productXCart.update({
          where: {
            id: productInCart.id,
          },
          data:{
            quantity:quantity
          }
        })
      }
    }
    throw new Error('Cart or Product not found');
  }

  async removeFromCart(userId: number , productId: number){
    const cart = await this.databaseServices.cart.findFirst({
      where:{userId}
    })

    if(cart){
      return this.databaseServices.productXCart.deleteMany({
        where: {
          cartId: cart.cartId,
          productId
        }
      })
    }
    throw new Error('Cart not found');
  }
}
