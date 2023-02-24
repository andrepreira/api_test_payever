import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:root@mongodb:27017/development',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin',
    authMechanism: 'SCRAM-SHA-256'
  }),
  UserModule]
})
export class AppModule {}
