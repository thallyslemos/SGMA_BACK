import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly primsa: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const studentExists = await this.primsa.student.findFirst({
      where: {
        name: createStudentDto.name,
      },
    });

    if (studentExists) {
      throw new ConflictException('Estudante já cadastrado!');
    }

    const student = await this.primsa.student.create({
      data: createStudentDto,
    });

    return student;
  }

  async findAll() {
    return await this.primsa.student.findMany();
  }

  findOne(id: string) {
    return this.primsa.student.findUnique({ where: { id } });
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.primsa.student.update({
      where: {
        id,
      },
      data: updateStudentDto,
    });
  }

  remove(id: string) {
    return this.primsa.student.delete({ where: { id } });
  }
}
