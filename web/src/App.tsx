import { Invoice } from "./invoiceType.ts";

import InvoiceTable from "./InvoiceTable.tsx";

const invoices: Invoice[] = [{
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '2026-10-07',
    dueDate: '2026-05-11',
    customer: {
        id: 1,
        name: 'Construtura Meridiano',
        email: 'contato@meridiano.com.br'
    }
}, {
    id: 2,
    amount: 15340,
    status: 'paid',
    issueDate: '2026-09-03',
    dueDate: '2026-10-05',
    customer: {
        id: 2,
        name: 'Gráfica Nova',
        email: 'nova@grafica.com.br'
    }
}, {
    id: 3,
    amount: 833457,
    status: 'pending',
    issueDate: '2026-10-07',
    dueDate: '2026-11-05',
    customer: {
        id: 3,
        name: 'Mendes Engenharia',
        email: 'contato@mendesengenharia.com.br'
    }
}];

export default function App() {
    return <>
        <h1>Faturas</h1>
        
        <InvoiceTable datas={invoices} />
    </>;
}

