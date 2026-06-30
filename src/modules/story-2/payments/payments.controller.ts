import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PaymentsService } from './payments.service';
import { ProcessPaymentDto, PaymentResponseDto } from './dto';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @ApiOperation({ summary: 'Process Stripe transaction' })
  @ApiResponse({ status: 200, type: PaymentResponseDto })
  async processPayment(@Body() body: ProcessPaymentDto): Promise<PaymentResponseDto> {
    return await this.paymentsService.processPayment(body);
  }
}
