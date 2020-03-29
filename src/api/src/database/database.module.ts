import { Module } from '@nestjs/common';
import { RxDBService } from './rxdb.service';

@Module({
  providers: [RxDBService],
  exports: [RxDBService],
})
export class DatabaseModule {}
