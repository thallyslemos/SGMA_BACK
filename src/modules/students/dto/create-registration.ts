import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  @IsNotEmpty()
  id_course: string;

  @IsString()
  @IsNotEmpty()
  id_student: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(10)
  grade_1: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(10)
  grade_2: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(10)
  grade_3: number;
}
