export interface PaymentPortalProps {
  invoiceId: string;
  amount: number;
  currency: string;
  status: 'active' | 'suspended' | 'past_due';
  onPaymentSuccess?: () => void;
}
