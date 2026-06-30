import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsISO8601 } from 'class-validator';

export class CreateInvoiceDto {
  @ApiProperty({ example: 'INV-001' })
  @IsString()
  @IsNotEmpty()
  invoiceNumber: string;

  @ApiProperty({ example: 100.50 })
  @IsNumber()
  amount: number;

  @ApiProperty({ example: 'USD' })
  @IsString()
  currency: string;

  @ApiProperty({ example: '2026-06-30' })
  @IsISO8601()
  date: string;
}

export class InvoiceResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  invoiceNumber: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  createdAt: string;
}
