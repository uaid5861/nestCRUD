import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  lv: number;

  @Column({ default: 0 })
  exp: number;

  @Column({ default: false })
  is_delete: boolean;

  @Column({ nullable: true }) // 新增头像字段，允许为空
  avatar: string;

  @CreateDateColumn()
  create_date: Date;
}
