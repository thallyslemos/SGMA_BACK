import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateRegistrationDto } from './dto/create-registration';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const studentExists = await this.prisma.student.findUnique({
      where: {
        cpf: createStudentDto.cpf,
      },
    });

    if (studentExists) {
      throw new ConflictException('Estudante já cadastrado!');
    }

    const student = await this.prisma.student.create({
      data: createStudentDto,
    });

    return student;
  }

  async findAll() {
    return await this.prisma.student.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.student.findUnique({ where: { id } });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const studentExists = await this.prisma.student.findFirst({
      where: {
        id,
      },
    });

    if (!studentExists) {
      throw new ConflictException('Aluno não encontrado!');
    }
    return await this.prisma.student.update({
      where: {
        id,
      },
      data: updateStudentDto,
    });
  }

  async remove(id: string) {
    const studentExists = await this.prisma.student.findFirst({
      where: {
        id,
      },
    });

    if (!studentExists) {
      throw new ConflictException('Aluno não encontrado!');
    }

    return this.prisma.student.delete({ where: { id } });
  }

  async createRegistration(createDto: CreateRegistrationDto) {
    const courseExists = await this.prisma.course.findUnique({
      where: {
        id: createDto.id_course,
      },
    });
    console.log(courseExists);

    if (!courseExists) {
      throw new ConflictException('Curso não encontrado"');
    }

    const studentExists = await this.prisma.student.findUnique({
      where: {
        id: createDto.id_student,
      },
    });

    if (!studentExists) {
      throw new ConflictException('Aluno não encontrado"');
    }
    
    const registrationExists = this.prisma.coursesStudents.findFirst({
      where: {
        id_course: createDto.id_course,
        id_student: createDto.id_student,
      },
    });

    if(registrationExists){
      throw new ConflictException(`O aluno ${studentExists.name} já está matriculado no modulo ${courseExists.name}.`)
    }
    return await this.prisma.coursesStudents.create({
      data: createDto,
    });
  }

  async updateRegistration(id: string, updateDto: UpdateRegistrationDto) {
    return this.prisma.coursesStudents.update({
      where: { id },
      data: updateDto,
    });
  }
}
