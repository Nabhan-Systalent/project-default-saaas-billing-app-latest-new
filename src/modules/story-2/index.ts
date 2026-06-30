import { Module } from '@nestjs/common';
import { PaymentsController } from './payments/payments.controller';
import { PaymentsService } from './payments/payments.service';

/**
 * Story module for story-2 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class Story2Module {}
