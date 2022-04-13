import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleUserModule } from './sample-user/sample-user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), SampleUserModule],
})
export class AppModule {}
