// Inclusão dos pacotes.
import Express, { response } from 'express'

// Instancia o express.
const app = Express()

// Definição da interface de rede.
const port = 3000

// Serviço oferecido no endereço raiz.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Busca de categorias.
app.get('/news-api/v1/categories', (req, res) => {
  getCategories(res)
})

// Busca de categorias.
app.get('/news-api/v1/categories/:categoryId/news', (req, res) => {
  getNews(req, res)
})

// Escuta solicitações e serve a aplicação Node.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// ---------------------- Banco de Dados -----------------------
// Inclusão dos pacotes.
import { createConnection } from 'mysql2'

// Configuração da conexão com o banco de dados.
var connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'APP_DATABASE'
})

// Abrir conexão com o banco de dados.
connection.connect()

// Realizar a busca no banco de dados.
function getCategories(response) {
  
  let sql = 'SELECT id, name FROM APP_DATABASE.category;'

  // Busca os dados de forma assíncrona.
  // Parâmetros - Consulta e função que recebe como parâmetro:
  // err    - Falha na busca ou não estabelecer conexão;
  // rows   - Linhas de resposta do banco de dados;
  // fields - Mapeamento dos campos da tabela do banco de dados em consulta.
  connection.query(sql, function(err, rows) {

    // Caso não apresente erro, envia as linhas da tabela
    if (err) throw err
      response.send(rows)
      // response.json(rows)
  })

  // Fecha conexão com o banco de dados.
  // connection.end()
}

async function getNews(request,response) {

  let categoryId = request.params.categoryId

  // ? - É um espaço reservado que faz com que o parâmetro "categoryId"
  //     seja tratado como uma string comum. Evitando o SQL injection.
  const query = 'SELECT id, title, content FROM APP_DATABASE.news WHERE id_category = ?;'
  connection.query(query, [categoryId], function(err, rows) {

    if (err) throw err
      response.send(rows)
      // response.json(rows)
  })
}

/* DQL, DDL e DML

function executeDQL(sql) {
  connection.connect()

  connection.query(sql, function(err, rows) {

    if (err) throw err
      return rows
  })

  connection.end()
}

async function getCategories(response) {
  let result = executeDQL('SELECT id, name FROM APP_DATABASE.category;')

  await response.send(result)
}

async function getNews(request, response) {
  let result = executeDQL('SELECT id, name FROM APP_DATABASE.category;')

  await response.send(result)
}*/