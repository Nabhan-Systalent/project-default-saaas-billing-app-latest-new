// auto-generated — do not edit

const BASE = '/api';

/** Create invoice record */
export async function createInvoice(): Promise<void> {
  const res = await fetch(`${BASE}/invoices`, { method: 'POST' });
  if (!res.ok) throw new Error(`createInvoice failed: ${res.status}`);
}

/** List all invoices */
export async function listInvoices(): Promise<unknown> {
  const res = await fetch(`${BASE}/invoices`, { method: 'GET' });
  if (!res.ok) throw new Error(`listInvoices failed: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as unknown;
}

/** Process Stripe transaction */
export async function processPayment(): Promise<void> {
  const res = await fetch(`${BASE}/payments`, { method: 'POST' });
  if (!res.ok) throw new Error(`processPayment failed: ${res.status}`);
}

/** Manage dunning states */
export async function updateAccountStatus(): Promise<void> {
  const res = await fetch(`${BASE}/dunning`, { method: 'PATCH' });
  if (!res.ok) throw new Error(`updateAccountStatus failed: ${res.status}`);
}
