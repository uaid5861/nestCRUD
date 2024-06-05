import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserList } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserList])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
