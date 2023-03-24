import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateUserDto } from './dto/validate-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        name: createUserDto.name,
      },
    });

    if (userExists) {
      throw new ConflictException(
        `Usuário ${createUserDto.name} já está cadastrado.`,
      );
    }

    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new ConflictException('Usuário não cadastrado');
    }

    const nameExists = await this.prisma.user.findFirst({
      where: {
        name: updateUserDto.name,
      },
    });

    if (nameExists) {
      throw new ConflictException(
        'O nome informado já está em uso por outro usuário.',
      );
    }

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    const userExists = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new ConflictException('Usuário não encontrado"');
    }

    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async login(user: ValidateUserDto) {
    const userLogin = await this.prisma.user.findUnique({
      where: {
        name: user.username,
      },
    });

    if (userLogin && userLogin.password == user.password) {
      return userLogin;
    } else {
      throw new ConflictException('As credencias do usuário não conferem!');
    }
  }
}
