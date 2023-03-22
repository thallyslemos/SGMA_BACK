import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id_course: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id_student: string;
  
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(10)
  @ApiProperty()
  grade_1: number;
  
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(10)
  @ApiProperty()
  grade_2: number;
  
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(10)
  @ApiProperty()
  grade_3: number;
}
