import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  @IsNotEmpty()
  id_course: string;

  @IsString()
  @IsNotEmpty()
  id_student: string;

  @IsNumber()
  @IsOptional()
  grade_1: number;

  @IsNumber()
  @IsOptional()
  grade_2: number;

  @IsNumber()
  @IsOptional()
  grade_3: number;
}
