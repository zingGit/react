export class UserBase {
      readonly  ID: number;
      readonly  Name: string;
      readonly Age: number;
      
}

export class GetUser extends UserBase {  }
export class GetAllUser extends UserBase {   }
export class CreateUser extends UserBase {   }
export class UpdateUser extends UserBase {   }
export class RemoveUser extends UserBase {   }