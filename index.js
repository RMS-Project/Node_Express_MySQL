// Inclusão dos pacotes.
const express = require('express')

// Instancia o express.
const app = express()

// Definição da interface de rede.
const port = 3000

// Serviço oferecido no endereço raiz.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Busca de categorias.
app.get('/news-api/v1/categories', (req, res) => {
    let categories = []
    res.send(categories)
})

// Escuta solicições e serve a aplicação Node.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})