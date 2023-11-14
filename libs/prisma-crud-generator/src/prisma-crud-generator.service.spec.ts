import { Test, TestingModule } from '@nestjs/testing'
import { PrismaCrudGeneratorService } from './prisma-crud-generator.service'

describe('PrismaCrudGeneratorService', () => {
  let service: PrismaCrudGeneratorService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaCrudGeneratorService],
    }).compile()

    service = module.get<PrismaCrudGeneratorService>(PrismaCrudGeneratorService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
