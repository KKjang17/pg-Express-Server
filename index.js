require('dotenv').config()
const express = require('express')
const app = express()
const pool = require('./database')


const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

//Dogs
app.get('/dogs', async (req, res) => {
  try {
      const dogInfo = await pool.query('SELECT * FROM dogs')
      console.log(res.json(dogInfo.rows))

  } catch (err) {
      console.error(err.message)
  }
})

app.get('/dogs/:id', async (req, res) => {
  const id = parseInt(req.params.id)

  try {
      const singleDogInfo = await pool.query('SELECT * FROM dogs WHERE id = $1', [id])
      console.log(res.json(singleDogInfo.rows))
  } catch (err) {
    console.error(err.message)
  }
})

//Cats
app.get('/cats', async (req, res) => {
  try {
      const catInfo = await pool.query('SELECT * FROM cats')
      console.log(res.json(catInfo.rows))

  } catch (err) {
      console.error(err.message)
  }
})



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})