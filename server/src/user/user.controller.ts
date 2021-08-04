import { Controller, Get, Query } from '@nestjs/common';
import { UserService  } from './user.service';

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService){}

    @Get()
    getHello(@Query() p):string {

        console.log("query: ", p.ID)
        return this.userService.getHello()
    }
}
