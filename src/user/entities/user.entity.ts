import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class UserList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  state: number;

  @Column({ nullable: true })  // 可选的头像字段
  avatar: string;

  @CreateDateColumn()
  createTime: Date;
}
