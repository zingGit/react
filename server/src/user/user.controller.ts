import { Controller, Get, Query, Post } from '@nestjs/common';
import { UserService  } from './user.service';
import { CreateUser } from "./dto/create.dto"

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService){}

    @Get()
    getHello(@Query() p):string {

        console.log("query: ", p.ID)
        const user = {
            ID:0,
            Name:"zingssss",
            Age: 28
        }
        return JSON.stringify(this.userService.createUser(user as CreateUser))
    }

    @Post()
    postHello(): string {
        return this.userService.postHello()
    }
}
