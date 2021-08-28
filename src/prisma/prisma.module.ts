import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 글로벌 Prisma 모델생성
@Module({
    providers: [PrismaService],
    exports: [PrismaService] // Prisma Service를 DI하기
})
export class PrismaModule {}
