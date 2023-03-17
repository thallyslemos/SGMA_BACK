import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './modules/prisma/prisma.service';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [ConfigModule.forRoot(), StudentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
