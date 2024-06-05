// appendFile.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from './api/api.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'nest_login',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
    retryAttempts: 10,
    retryDelay: 500,

  }),
  AuthModule,
  ApiModule,
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
