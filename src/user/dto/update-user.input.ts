import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Messages } from 'src/utils/messages';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: Messages.validation.notEmpty })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: Messages.validation.notEmpty })
  @IsOptional()
  email?: string;
}
