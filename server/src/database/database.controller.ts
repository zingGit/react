import { Controller, Post, Body } from '@nestjs/common';
import { DataBaseService } from "./database.service"
import { User } from './database.entity';

@Controller('database')
export class DatabaseController {

      constructor( private readonly dataBaseService: DataBaseService){}

      @Post("create")
      // @HttpCode(204) 可以更改响应状态码
      getUser(@Body() data ): Promise<User> {
          console.log("database create data:", data)
        
          return this.dataBaseService.create(data)
      }
}
