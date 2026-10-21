type InvoiceStatus = 'paid' | 'pending' 

interface Invoice {
    id: number;
    amount: number;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: {
        id: number;
        name: string;
        email: string;
    }
}

const invoices:Invoice[] = [{
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
        id: 1,
        name: 'Construtura Meridiano',
        email: 'contato@meridiano.com.br',
    }
}, {
    id: 2,
    amount: 15340,
    status: 'paid',
    issueDate: '03-09-2026',
    dueDate: '05-10-2026',
    customer: {
        id: 2,
        name: 'Gráfica Nova',
        email: 'nova@grafica.com.br',
    }
}, {
    id: 3,
    amount: 833457,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
        id: 3,
        name: 'Mendes Engenharia',
        email: 'contato@mendesengenharia.com.br',
    }
}];

export function findAllInvoices() {
    return invoices;
}

export function findInvoiceById(id: number) {
    return invoices.find(element => element.id === id);
}