import { Module } from '@nestjs/common';
import { InvoicingController } from './invoicing/invoicing.controller';
import { InvoicingService } from './invoicing/invoicing.service';

/**
 * Story module for story-9 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [InvoicingController],
  providers: [InvoicingService],
})
export class Story9Module {}
