import { Invoice } from './InvoiceManager.types';

export interface InvoiceListProps {
  invoices: Invoice[];
  isLoading?: boolean;
  error?: string | null;
}
