import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { CoursesModule } from './modules/courses/courses.module';
import { PrismaService } from './common/prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), StudentsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
