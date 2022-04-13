import { UpdateSampleUserDto } from './dto/update-sample-user.dto';
import { CreateSampleUserDto } from './dto/create-sample-user.dto';
import { SampleUser } from '../entity/sample-user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SampleUserService {
  constructor(
    @InjectRepository(SampleUser)
    private sampleUserRepository: Repository<SampleUser>,
  ) {}

  async findAll(): Promise<SampleUser[]> {
    return await this.sampleUserRepository.find({
      where: {
        isDeleted: false,
      },
    });
  }

  async findOne(id: string): Promise<SampleUser> {
    return await this.sampleUserRepository.findOne(id);
  }

  async create(createSampleUserDto: CreateSampleUserDto) {
    const sampleUser = new SampleUser();
    sampleUser.userName = createSampleUserDto.userName;
    sampleUser.isDeleted = false;
    await this.sampleUserRepository.save(sampleUser);
  }

  async update(id: string, updateSampleUserDto: UpdateSampleUserDto) {
    const sampleUser = await this.findOne(id);
    sampleUser.userName = updateSampleUserDto.userName;
    await this.sampleUserRepository.save(sampleUser);
  }

  async delete(id: string) {
    const sampleUser = await this.findOne(id);
    sampleUser.isDeleted = true;
    await this.sampleUserRepository.save(sampleUser);
  }
}
