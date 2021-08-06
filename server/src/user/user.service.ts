import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

@Injectable()
export class UserService {

    getAllUser(): string {
        
        return `getAllUser`
    }

    getUser(data): string {
        return JSON.stringify(data)
    }

    createUser(): string {

        return `createUser`
    }

    updateUser(): string {
        return "updateUser"
    }

    removeUser(): string {

        return `removeUser`
    }

   
}
