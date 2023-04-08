import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { CoreModule } from './modules/core/core.module';
<<<<<<< Updated upstream

const modules = [CoreModule, UsersModule];
=======
import { ManagementModule } from './modules/management/management.module';
import { SharedModule } from './modules/shared/shared.module';

const modules = [CoreModule, ManaggementModule, SharedModule, UsersModule];
>>>>>>> Stashed changes

@Module({
  imports: [
    ...modules,
    MongooseModule.forRoot('mongodb://localhost:27017/imonotributo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
