import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistrationDto } from './create-registration';

export class UpdateRegistrationto extends PartialType(CreateRegistrationDto) {}
