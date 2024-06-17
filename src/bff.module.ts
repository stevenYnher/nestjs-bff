import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BffController } from './bff.controller';

@Module({
  imports: [HttpModule],
  controllers: [BffController],
})
export class BffModule {}
