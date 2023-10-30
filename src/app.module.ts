import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://apurv07012001:eovJNBoS9ZztwYoW@cluster1.ze1sxux.mongodb.net/product'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
