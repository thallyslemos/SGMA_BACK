import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { CoursesModule } from './modules/courses/courses.module';
import { PrismaService } from './common/prisma/prisma.service';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [ConfigModule.forRoot(), SwaggerModule, StudentsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
