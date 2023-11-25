const express= require('express');
const server= express();
const port= 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Servidor funcionando!')
});

app.listen(port, () => {
    console.log("Server rodando na porta ${port}");
})

