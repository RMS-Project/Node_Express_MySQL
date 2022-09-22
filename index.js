// Inclusão dos pacotes.
import Express from 'express'

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
  //res.send(getCategories())
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

// Realizar a busca no banco de dados.
function getCategories(result) {
  // Abrir conexão com o banco de dados.
  connection.connect()

  let sql = 'SELECT id, name FROM APP_DATABASE.category;'

  // Busca os dados de forma assíncrona.
  // Parâmetros - Consulta e função que recebe como parâmetro:
  // err    - Falha na busca ou não estabelecer conexão;
  // rows   - Linhas de resposta do banco de dados;
  // fields - Mapeamento dos campos da tabela do banco de dados em consulta.
  connection.query(sql, function(err, rows) {

    // Caso não apresente erro, envia as linhas da tabela
    if (err) throw err
      result.send(rows)
  })

  // Fecha conexão com o banco de dados.
  connection.end()
}