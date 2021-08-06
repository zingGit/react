import { Controller, Post, Body } from '@nestjs/common';
import { DataBaseService } from "./database.service"
import { User } from './database.entity';

@Controller('database')
export class DatabaseController {

      constructor( private readonly dataBaseService: DataBaseService){}

      @Post("create")
      getUser(@Body() data ): Promise<User> {
        
          return this.dataBaseService.create(data)
      }

      @Post("findAll")
      findAll(@Body() data ): Promise<User[]> {
        
          return this.dataBaseService.findAll()
      }

      @Post("findOne")
      findOne(@Body() { ID } ): Promise<User> {
        
          return this.dataBaseService.findOne(ID)
      }
      @Post("remove")
      remove(@Body() { ID } ): Promise<void> {
        
          return this.dataBaseService.remove(ID)
      }
}
