import { UpdateSampleUserDto } from './dto/update-sample-user.dto';
import { CreateSampleUserDto } from './dto/create-sample-user.dto';
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { SampleUserService } from './sample-user.service';

@Controller('sampleUser')
export class SampleUserController {
  constructor(private readonly sampleUserService: SampleUserService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const sampleUserList = await this.sampleUserService.findAll();
    res.status(HttpStatus.OK).json({
      message: 'findAll',
      data: sampleUserList,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const sampleUser = await this.sampleUserService.findOne(id);
    res.status(HttpStatus.OK).json({
      message: 'findOne',
      data: sampleUser,
    });
  }

  @Post()
  async create(
    @Body() createSampleUserDto: CreateSampleUserDto,
    @Res() res: Response,
  ) {
    this.sampleUserService.create(createSampleUserDto);
    res.status(HttpStatus.OK).json({
      message: 'create',
      data: null,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSampleUserDto: UpdateSampleUserDto,
    @Res() res: Response,
  ) {
    this.sampleUserService.update(id, updateSampleUserDto);
    res.status(HttpStatus.OK).json({
      message: 'update',
      data: null,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    this.sampleUserService.delete(id);
    res.status(HttpStatus.OK).json({
      message: 'delete',
      data: null,
    });
  }
}
