import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [TypeOrmModule.forRoot(), SampleModule],
})
export class AppModule {}
