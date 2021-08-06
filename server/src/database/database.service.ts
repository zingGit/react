import { Injectable } from '@nestjs/common';
import { User } from './database.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class DataBaseService {
      constructor(
            @InjectRepository(User)
            private readonly usersRepository: Repository<User>,
          ) {}
        
          create(user): Promise<User> {
            // const user = new User()
            // user.ID = data.ID
            // user.Name = data.Name
            // user.Age = data.Age
            return this.usersRepository.save(user);
          }
}
