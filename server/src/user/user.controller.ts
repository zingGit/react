import { Controller, Get, Query, Post, Body, Req , Headers, Param, HttpCode} from '@nestjs/common';
import { UserService  } from './user.service';
import * as User from "./dto"
import Request from "@nestjs/platform-express"

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService){}

    /**
     * 
     * get 请求取数据 用@Query
     * post 请求取数据 用@Body
     * 可以使用解构的方式直接去某个参数 例如：@Query() {ID}
     */
    @Get("getAll")
    getAllUser(@Query() data : User.GetAllUser, @Req() req: Request):string {
        console.log("getAll data:", data)
 
        // console.log("getAll req:", req.url)
        // console.log("getAll req:", req.headers)
        // console.log("getAll req:", req.body)
        // console.log("getAll req:", req.method)
        return this.userService.getAllUser()
    }
    
    @Post("getUser")
    // @HttpCode(204) 可以更改响应状态码
    getUser(@Body() data: User.GetUser,@Req() req: Request, @Headers() headers): string {
        console.log("getUser data:", data)
        // console.log("getUser headers:", headers)
        // console.log("getAll req:", req.url)
        // console.log("getAll req:", req.headers)
        // console.log("getAll req:", req.body)
        // console.log("getAll req:", req.method)
        return this.userService.getUser(data)
    }
    
    @Post("createUser")
    createUser(@Body() data: User.CreateUser ): string {
        console.log("createUser data:", data)
        return this.userService.createUser()
    }
    
    @Post("updateUser")
    updateUser(@Body() data: User.UpdateUser ): string {
        console.log("updateUser data:", data)
        return this.userService.updateUser()
    }
    
    @Post("removeUser")
    removeUser(@Body() data: User.RemoveUser ): string {
        console.log("removeUser data:", data)
        return this.userService.removeUser()
    }


}
