const express = require('express')
const userHandles = require('./routes/handles')
const articleHandles = require('./routes/articles')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

/*const db = require('./dbClient')
db.on("error", (err) => {
  console.error(err)
})*/

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/articles', articleHandles)
app.use('/', userHandles)



const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})


module.exports = server