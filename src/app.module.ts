import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { CoreModule } from './modules/core/core.module';

const modules = [CoreModule, UsersModule];

@Module({
  imports: [
    ...modules,
    MongooseModule.forRoot('mongodb://localhost:27017/imonotributo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
