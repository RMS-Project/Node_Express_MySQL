// Inclusão dos pacotes.
import Express, { response } from 'express'
import cors from 'cors'

// Instancia o express.
const app = Express()

// Definição da interface de rede.
const port = 3000

// Definição das aplicações externas que podem acessar a API.
const corsOptions = {
  origin: 'http://localhost:5173',
  //origin: 'http://127.0.0.1:5173',
  optionsSuccessStatus: 200 // Para legacy browsers (IE11, várias SmartsTVs)
}

// Aplica cors a todas as rotas.
app.use(cors(corsOptions))

app.use(Express.json())

// Serviço oferecido no endereço raiz.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Busca de categorias.
app.get('/news-api/v1/categories', (req, res) => {
  getCategories(res)
})

// Busca de noticias por categoria.
app.get('/news-api/v1/categories/:categoryId/news', (req, res) => {
  getNews(req, res)
})

// Busca de noticia especifica de uma categoria.
app.get('/news-api/v1/categories/:categoryId/news/:newsId', (req, res) => {
  getNewsContent(req, res)
})

app.post('/news-api/v1/user', /*cors(corsOptions),*/ (req, res) => {
  setUser(req, res)
}) 

app.get('/news-api/v1/users', /*cors(corsOptions),*/ (req, res) => {
  getUsers(req, res)
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
      response.json({rows}) // Retorna um json com um array "rows".
      // response.send(rows) // Retorna um Array.
  })

  // Fecha conexão com o banco de dados.
  // connection.end()
}

async function getNews(request,response) {

  let categoryId = request.params.categoryId

  // ? - É um espaço reservado que faz com que o parâmetro "categoryId"
  //     seja tratado como uma string comum. Evitando o SQL injection.
  const query = 'SELECT id, title FROM APP_DATABASE.news WHERE id_category = ?;'
  connection.query(query, [categoryId], function(err, rows) {

    if (err) throw err
      response.send(rows)
      //response.send(rows[0])
      // response.json(rows)
  })
}

async function getNewsContent(request,response) {

  let categoryId = request.params.categoryId
  let newsId = request.params.newsId

  // ? - É um espaço reservado que faz com que o parâmetro "categoryId"
  //     seja tratado como uma string comum. Evitando o SQL injection.
  const query = 'SELECT id, title, content FROM APP_DATABASE.news WHERE id_category = ? AND id = ?;'
  connection.query(query, [categoryId, newsId], function(err, rows) {

    if (err) throw err
      response.send(rows)
      //response.send(rows[0])
      // response.json(rows)
  })
}

async function getUsers(request,response) {

  let sql = 'SELECT id, name FROM APP_DATABASE.user;'

  connection.query(sql, function(err, rows) {

    if (err) throw err
      response.json({rows})

  })
}

async function setUser(request,response) {
  const body = request.body

  let name = body.name
  let email = body.email
  let password = body.password
  
  const query = 'INSERT INTO user (name, email, password) VALUES (?,  ?, ?);'
  connection.query(query, [name, email, password], function(err, rows) {
    
    if (err) throw err
      response.status(201)
      response.send(rows)
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
