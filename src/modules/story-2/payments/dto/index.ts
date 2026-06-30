import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProcessPaymentDto {
  @ApiProperty({ description: 'The amount in cents' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Currency code, e.g., usd' })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty({ description: 'Stripe payment method token' })
  @IsString()
  @IsNotEmpty()
  paymentMethodId: string;
}

export class PaymentResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: string;
}
