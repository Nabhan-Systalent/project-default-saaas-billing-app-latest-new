export interface Invoice {
  id: string;
  customerName: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
}

export interface InvoiceListProps {
  invoices: Invoice[];
  isLoading?: boolean;
  error?: string | null;
}
