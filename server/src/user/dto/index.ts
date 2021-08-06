import { ApiProperty } from '@nestjs/swagger';

export class UserBase {
      @ApiProperty()
      readonly  ID: number;
      @ApiProperty({description: "哈哈哈哈哈哈哈哈哈哈或"})
      readonly  Name: string;
      @ApiProperty({description: "yyyyyyyyyyyyy"})
      readonly Age: number;
      
}

export class GetUser extends UserBase {  }
export class GetAllUser extends UserBase {   }
export class CreateUser extends UserBase {   }
export class UpdateUser extends UserBase {   }
export class RemoveUser extends UserBase {   }