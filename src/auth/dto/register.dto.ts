import { IsString, MinLength, MaxLength, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsUrl } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsNumber()
  lv?: number;

  @IsOptional()
  @IsNumber()
  exp?: number;

  @IsOptional()
  @IsBoolean()
  is_delete?: boolean;

  @IsOptional()
  @IsUrl() // 验证 URL 格式
  avatar?: string;
}
