import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseServices: DatabaseService){}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseServices.user.create({data: createUserDto});
  }

  async getAllUsers() {
    return this.databaseServices.user.findMany();
  }

  async findOne(userId: number) {
    return this.databaseServices.user.findUnique({
      where: { userId },
    })
  }

  async updateUser(userId: number, data: Prisma.UserUpdateInput) {
    return this.databaseServices.user.update({
      where: { userId },
      data,
    });
  }

  async remove(userId: number) {
    return this.databaseServices.user.delete({
      where:{userId},
    })
  }
}
