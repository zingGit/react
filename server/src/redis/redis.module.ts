import { Module } from "@nestjs/common"
import { RedisController } from "./redis.control"
import { RedisServices } from "./redis.service"
import { RedisModule} from 'nestjs-redis'


@Module({
  
    controllers: [RedisController],
    providers: [RedisServices],
})

export class RedisModules {}