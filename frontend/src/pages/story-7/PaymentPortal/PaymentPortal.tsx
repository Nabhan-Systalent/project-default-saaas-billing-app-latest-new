'use client';

import React, { useState } from 'react';
import { PaymentPortalProps } from './PaymentPortal.types';

export const PaymentPortal: React.FC<PaymentPortalProps> = ({
  invoiceId,
  amount,
  currency,
  status,
  onPaymentSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePay = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onPaymentSuccess?.();
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Payment Portal</h2>
      
      {status === 'suspended' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
          <p className="font-medium">Account Suspended</p>
          <p className="text-sm">Please pay your outstanding invoice to restore access.</p>
        </div>
      )}

      <div className="flex justify-between items-center py-4 border-b border-gray-100">
        <span className="text-gray-600">Invoice ID</span>
        <span className="font-mono font-medium">{invoiceId}</span>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-gray-100 mb-6">
        <span className="text-gray-600">Amount Due</span>
        <span className="text-2xl font-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)}</span>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        onClick={handlePay}
        disabled={loading}
        className="w-full py-3 px-4 bg-[var(--color-primary)] text-white rounded-lg hover:opacity-90 disabled:opacity-50 transition-colors font-medium"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};
