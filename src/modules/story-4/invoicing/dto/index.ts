import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  amount: number;
}

export class InvoiceResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  customerName: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  createdAt: Date;
}
