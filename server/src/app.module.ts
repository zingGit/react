import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { RedisModules } from './redis/redis.module';
// import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'wo4760334',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EventsModule,
    RedisModules
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
