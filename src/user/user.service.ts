import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserList } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserList)
    private userRepository: Repository<UserList>,
  ) {}

  async findAll(): Promise<UserList[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<UserList> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: UserList): Promise<UserList> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Partial<UserList>): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
