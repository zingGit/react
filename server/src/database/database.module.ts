import { Module } from '@nestjs/common';
import { User } from './database.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataBaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Module({

      imports: [TypeOrmModule.forFeature([User])],
      providers: [DataBaseService],
      controllers: [DatabaseController],
})
export class DatabaseModule {}
