import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Messages } from 'src/utils/messages';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: Messages.validation.notEmpty })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: Messages.validation.notEmpty })
  email: string;
}
