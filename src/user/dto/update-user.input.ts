import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Messages } from 'src/utils/helpers/messages-helper';

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: Messages.validation.notEmpty })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: Messages.validation.invalidEmail })
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty({ message: Messages.validation.passwordRequired })
  @IsOptional()
  password?: string;
}
