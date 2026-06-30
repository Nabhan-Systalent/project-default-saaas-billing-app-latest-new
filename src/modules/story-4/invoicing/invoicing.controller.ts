import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { InvoicingService } from './invoicing.service';
import { CreateInvoiceDto, InvoiceResponseDto } from './dto';

@ApiTags('Invoicing')
@Controller('invoices')
export class InvoicingController {
  constructor(private readonly invoicingService: InvoicingService) {}

  @Get()
  @ApiOperation({ summary: 'List all invoices' })
  @ApiResponse({ status: 200, type: [InvoiceResponseDto] })
  async listInvoices(): Promise<InvoiceResponseDto[]> {
    return this.invoicingService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create invoice record' })
  @ApiResponse({ status: 201, type: InvoiceResponseDto })
  async createInvoice(@Body() createInvoiceDto: CreateInvoiceDto): Promise<InvoiceResponseDto> {
    return this.invoicingService.create(createInvoiceDto);
  }
}
