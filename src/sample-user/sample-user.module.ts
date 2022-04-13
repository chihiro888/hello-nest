import { SampleUser } from '../entity/sample-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SampleUserController } from './sample-user.controller';
import { SampleUserService } from './sample-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([SampleUser])],
  controllers: [SampleUserController],
  providers: [SampleUserService],
})
export class SampleUserModule {}
