import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    const courseExists = await this.prisma.course.findFirst({
      where: {
        name: createCourseDto.name,
      },
    });

    if (courseExists) {
      throw new ConflictException('Já existe um curso com esse nome.');
    }
    const course = this.prisma.course.create({
      data: createCourseDto,
    });

    return course;
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  async findOne(id: string) {
    return this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const courseExists = await this.prisma.course.findUnique({
      where: {
        id,
      },
    });

    if (!courseExists) {
      throw new ConflictException('Courso não cadastrado!');
    }

    const sameName = await this.prisma.course.findFirst({
      where: {
        name: updateCourseDto.name,
      },
    });

    if (sameName) {
      throw new ConflictException('Já existe outro curso com esse nome!');
    }

    return await this.prisma.course.update({
      where: {
        id,
      },
      data: updateCourseDto,
    });
  }

  async remove(id: string) {
    const courseExists = await this.prisma.course.findUnique({
      where: {
        id,
      },
    });

    if (!courseExists) {
      throw new ConflictException('Courso não cadastrado!');
    }

    return await this.prisma.course.delete({
      where: {
        id,
      },
    });
  }
}
