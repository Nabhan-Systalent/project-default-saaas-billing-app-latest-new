'use client';

import React from 'react';
import { InvoiceListProps } from './InvoiceManager.types';

const statusStyles = {
  paid: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  overdue: 'bg-red-100 text-red-800',
};

export const InvoiceManager: React.FC<InvoiceListProps> = ({ invoices, isLoading, error }) => {
  if (isLoading) {
    return <div className="p-4 text-center text-gray-500">Loading invoices...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 font-semibold text-gray-700">Customer</th>
            <th className="p-4 font-semibold text-gray-700">Amount</th>
            <th className="p-4 font-semibold text-gray-700">Due Date</th>
            <th className="p-4 font-semibold text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-8 text-center text-gray-500">
                No invoices found.
              </td>
            </tr>
          ) : (
            invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="p-4 text-gray-900">{invoice.customerName}</td>
                <td className="p-4 text-gray-900">${invoice.amount.toFixed(2)}</td>
                <td className="p-4 text-gray-600">{new Date(invoice.dueDate).toLocaleDateString()}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${statusStyles[invoice.status]}`}>
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
