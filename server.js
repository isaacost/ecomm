import app from './src/main.js';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
