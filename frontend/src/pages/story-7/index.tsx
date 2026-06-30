import React from 'react';
import { PaymentPortal } from './PaymentPortal/PaymentPortal';

/**
 * Page for story-7 — synthesised by the AEGIS pipeline so the generated
 * component is mounted by the SPA router. Props are safe placeholders; the
 * integration pass upgrades this into a data-wired container.
 */
export default function Page(): React.ReactElement {
  const props: any = {
    invoiceId: [],
    amount: [],
    currency: [],
    status: [],
    onPaymentSuccess: () => {},
  };
  return (
    <div>
      <h1>Story 7</h1>
      <PaymentPortal {...props} />
    </div>
  );
}
