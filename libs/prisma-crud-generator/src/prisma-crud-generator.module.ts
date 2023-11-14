import { Module } from '@nestjs/common'
import { PrismaCrudGeneratorService } from './prisma-crud-generator.service'

@Module({
  providers: [PrismaCrudGeneratorService],
  exports: [PrismaCrudGeneratorService],
})
export class PrismaCrudGeneratorModule {}
