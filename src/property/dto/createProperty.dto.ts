import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(2, 10, { message: "Error on length"}) // The min length is 2 and the max length is 10
    name: string;

    @IsString()
    @Length(2, 10, { groups: ['create']}) // Only the first one is used for global validation
    @Length(1, 15, { groups: ['update']})
    description: string;

    @IsInt()
    @IsPositive({ message: "Must be a positive number"})
    area: number;
}