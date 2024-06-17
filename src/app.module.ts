import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BffModule } from './bff.module';

@Module({
  imports: [BffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
