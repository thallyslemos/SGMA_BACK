import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateRegistrationDto } from './dto/create-registration';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Alunos')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiBody({ type: CreateStudentDto })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Post('registrations')
  @ApiBody({ type: CreateRegistrationDto })
  createRegistration(@Body() registrationDto: CreateRegistrationDto) {
    return this.studentsService.createRegistration(registrationDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Get('registrations/:id')
  findRegisters(@Param('id') id: string) {
    return this.studentsService.findRegistrations(id);
  }

  @Get('register/:id')
  findRegister(@Param('id') id: string) {
    return this.studentsService.findRegister(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateStudentDto })
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Patch('registrations/:id')
  @ApiBody({ type: UpdateRegistrationDto })
  updateRegistration(
    @Param('id') id: string,
    @Body() updateRegistrationDto: UpdateRegistrationDto,
  ) {
    return this.studentsService.updateRegistration(id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
  @Delete('registrations/:id')
  removeRegistration(@Param('id') id: string) {
    return this.studentsService.removeRegistration(id);
  }
}
