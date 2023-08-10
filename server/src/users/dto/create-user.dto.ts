import { IsString, IsEmail } from "class-validator"

export class CreateUserDto {

    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    phoneNumber: string

    @IsString()
    password: string

}
