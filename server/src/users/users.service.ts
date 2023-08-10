import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>
  ) {}
  create(createUserDto: CreateUserDto) {
    console.log('service',createUserDto)
    const newUser = this.userRepository.create({
      ...createUserDto,
      role: "Normal",
      createAt: new Date().toLocaleString(),
    });
    return this.userRepository.save(newUser);
  };

  findAll() {
    return this.userRepository.find();
  }

  async findOne(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({where: {email:email}});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
