const Pool = require('pg').Pool
/*
const pool = new Pool({
    user: 'jucjhibswlteqh',
    host: 'ec2-52-3-130-181.compute-1.amazonaws.com',
    database: 'dc8gg97cpfnjbu',
    password: 'ee3ed767c5a6f116e8bd80c6070cd327f27ff5404dc0f7397214c828e3b283e3',
    port: 5432,
})
*/
const pool = new Pool({
  connectionString:  process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})
/*
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'animal_shelter',
    password: 'postgres123',
    port: 5432,
})
/*
const getInfo = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM dogs', (error, results) => {
          if (error) {
            reject(error)
          }
          resolve(results.rows);
        })
      }) 
}
*/

module.exports = pool;