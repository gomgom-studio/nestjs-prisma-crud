import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaCrudGeneratorService<T> {
  tableName: string = null

  constructor(readonly prisma: PrismaService) {}

  async findMany(): Promise<T[]> {
    const result = await this.prisma[this.tableName].findMany({})
    return result
  }
}
