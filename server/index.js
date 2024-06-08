require('dotenv').config()
const express = require('express')
const app = express()
const port = parseInt(process.env.PORT) || 3030


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`PORT: ${process.env.PORT}`);
  console.log(`Example app listening on port ${port}`)
})