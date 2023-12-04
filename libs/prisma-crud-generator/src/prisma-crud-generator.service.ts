import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class PrismaCrudGeneratorService<T> {
  tableName: string = null

  constructor(readonly prisma: PrismaService) {}

  async findMany(): Promise<T[]> {
    const result = await this.prisma[this.tableName].findMany({})
    return result
  }
}
