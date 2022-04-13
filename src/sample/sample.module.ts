import { SampleUser } from './../entity/sample-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([SampleUser])],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
