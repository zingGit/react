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
        
          create(data): Promise<User> {
            const user = new User()
            // user.ID = data.ID
            user.Name = data.Name
            user.Age = data.Age
            return this.usersRepository.save(data);
          }

          findAll(): Promise<User[]> {
            return this.usersRepository.find();
          }
        
          findOne(id: number): Promise<User> {
            return this.usersRepository.findOne(id);
          }
        
          async remove(id: number): Promise<void> {
            await this.usersRepository.delete(id);
          }
}
