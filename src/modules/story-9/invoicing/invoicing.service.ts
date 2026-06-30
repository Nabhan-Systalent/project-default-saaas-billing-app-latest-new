import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto, InvoiceResponseDto } from './dto';

@Injectable()
export class InvoicingService {
  private readonly invoices: InvoiceResponseDto[] = [];

  async findAll(): Promise<InvoiceResponseDto[]> {
    return this.invoices;
  }

  async create(data: CreateInvoiceDto): Promise<InvoiceResponseDto> {
    const newInvoice: InvoiceResponseDto = {
      id: Math.random().toString(36).substring(7),
      ...data,
      createdAt: new Date().toISOString(),
    };
    this.invoices.push(newInvoice);
    return newInvoice;
  }
}
