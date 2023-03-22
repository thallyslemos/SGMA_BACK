import { PartialType } from '@nestjs/swagger';
import { CreateRegistrationDto } from './create-registration';

export class UpdateRegistrationDto extends PartialType(CreateRegistrationDto) {}
