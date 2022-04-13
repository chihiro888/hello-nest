import { ReadSampleDto } from './dto/read-sample.dto';
import { CreateSampleDto } from './dto/create-sample.dto';
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
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  findAll(@Query() query: ReadSampleDto, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'findAll',
      data: null,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'findOne',
      data: null,
    });
  }

  @Post()
  create(@Body() createCatDto: CreateSampleDto, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'create',
      data: null,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'update',
      data: null,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'delete',
      data: null,
    });
  }
}
