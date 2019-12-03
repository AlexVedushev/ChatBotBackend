import { Module } from '@nestjs/common';
import { DialogFlowModule } from 'nestjs-dialogflow'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DialogFlowModule.forRoot({
      basePath: 'web-hooks',
      postPath: 'dialog-flow'
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
