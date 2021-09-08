require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('./database')


const cors = require('cors')
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/dogs', async (req, res) => {
  try {
      const dogInfo = await pool.query('SELECT * FROM dogs')
      console.log(res.json(dogInfo.rows))

  } catch (err) {
      console.error(err.message)
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})