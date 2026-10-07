import express from 'express';

const app = express();

app.get('/api/health', (request, response) => {
    response.status(200).json({ sucess: {
        status: 200,
        message: 'Server is runnig.'
    }});
});

app.use((request, response) => {
    response.status(404).json({ error: {
        status: 404,
        message: 'Resourse not found.'
    }});
});

app.listen(3000);