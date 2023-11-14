import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'

export class PrismaCrudGeneratorController<T> {
  private readonly logger = new Logger('PrismaCrudGeneratorController')

  @Get(':id')
  async readOne(
    @Res() response: Response,
    @Param() params,
  ): Promise<Response<T>> {
    this.logger.log('readOne - params', params)
    return response.status(HttpStatus.OK).json({})
  }

  @Get()
  async readMany(
    @Res() response: Response,
    @Query() query,
  ): Promise<Response<T>> {
    this.logger.log('readMany - query', query)
    return response.status(HttpStatus.OK).json({})
  }

  @Post()
  async createOne(
    @Res() response: Response,
    @Body() payload: Partial<T>,
  ): Promise<Response<T>> {
    this.logger.log('createOne - payload', payload)
    return response.status(HttpStatus.OK).json({})
  }

  @Patch(':id')
  async updateOne(
    @Res() response: Response,
    @Param() params,
    @Body() payload: Partial<T>,
  ): Promise<Response<T>> {
    this.logger.log('updateOne - params', params)
    this.logger.log('updateOne - payload', payload)
    return response.status(HttpStatus.OK).json({})
  }

  @Delete(':id')
  async deleteOne(
    @Res() response: Response,
    @Param() params,
  ): Promise<Response<T>> {
    this.logger.log('deleteOne - params', params)
    return response.status(HttpStatus.OK).json({})
  }
}
