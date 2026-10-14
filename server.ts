import express from 'express';

const invoices = [{
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
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
        name: 'Mendes Engenharia',
        email: 'contato@mendesengenharia.com.br',
    }
}];

const app = express();

app.get('/api/health', (request, response) => {
    response.status(200).json({ sucess: {
        status: 200,
        message: 'Server is runnig.'
    }});
});

app.get('/api/invoices', (request, response) => {
    response.status(200).json(invoices);
});

app.get('/api/invoices/:id', (request, response) => {
    const id = Number(request.params.id);

    const invoice = invoices.find(element => element.id === id);

    if (!invoice) response.status(404).json({ error: {
        status: 404,
        message: 'Invoice not found.'
    }});

    response.status(200).json(invoice);
});

app.use((request, response) => {
    response.status(404).json({ error: {
        status: 404,
        message: 'Resourse not found.'
    }});
});

app.listen(3000);