import { InvoiceStatus } from "./invoiceType.ts"

export function statusLabel(status: InvoiceStatus) {
    return status === 'paid' ? 'Paga' : 'Pendente';
}

