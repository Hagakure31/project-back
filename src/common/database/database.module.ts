import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProvider } from './database.provider';


@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
  imports: [ConfigModule],
})
export class DatabaseModule {}