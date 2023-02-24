// user.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RabbitMQService } from './rabbitmq.service';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@mongodb:27017/development',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
      authMechanism: 'SCRAM-SHA-256'
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, RabbitMQService],
})
export class UserModule {}