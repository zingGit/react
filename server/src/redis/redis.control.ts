import { Controller, Get, Post, Body } from "@nestjs/common"
import { RedisServices } from "./redis.service"
import { RedisSet } from "./dto"
@Controller("redis")
export class RedisController {

    constructor( private readonly redisService : RedisServices){}

    @Post("set")
    async setKey(@Body() data: RedisSet) {
        console.log(`redis set key: ${data.key}, value:${data.value}`)
        return await this.redisService.set(data.key, data.value)
    }
    
    @Post("get")
    async getKey(@Body() data) {
        
        console.log('redis get:', data.key)
        return await this.redisService.get(data.key)
    }
}