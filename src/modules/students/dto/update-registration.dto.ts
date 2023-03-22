import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistrationDto } from './create-registration';

export class UpdateRegistrationDto extends PartialType(CreateRegistrationDto) {}
