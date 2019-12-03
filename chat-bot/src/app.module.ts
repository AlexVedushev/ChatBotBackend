import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './webhook/webhook.controller'

@Module({
  imports: [TypeOrmModule.forRoot(),],
  controllers: [AppController, WebhookController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
