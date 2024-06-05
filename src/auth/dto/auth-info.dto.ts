// user-info.dto.ts
import { IsNumber, IsString, IsBoolean, IsDate, IsOptional } from 'class-validator';

export class AuthInfoDto {
  @IsNumber()
  id: number;

  @IsString()
  username: string;

  @IsNumber()
  lv: number;

  @IsNumber()
  exp: number;

  @IsBoolean()
  is_delete: boolean;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsDate()
  create_date: Date;
}
