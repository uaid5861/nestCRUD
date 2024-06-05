import { IsString, IsInt, Min, IsIn, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsInt()
    @Min(0)
    age: number;

    @IsInt()
    @IsIn([0, 1, 2])
    state: number;

    @IsOptional()
    @IsString()
    avatar?: string;  // 可选的头像字段
}