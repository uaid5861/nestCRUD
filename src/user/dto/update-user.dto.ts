import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsInt, Min, IsIn, IsOptional } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    age?: number;

    @IsOptional()
    @IsInt()
    @IsIn([0, 1, 3])
    state?: number;

    @IsOptional()
    @IsString()
    avatar?: string;  // 可选的头像字段
}
