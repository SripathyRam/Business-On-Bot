const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bank',
  password: 'Sri@2903',
  port: 5432,
});

const getSearch = (request, response) => {
    pool.query('SELECT * FROM branches ORDER BY ifsc ASC limit 2 offset 1',(error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

  const getBranch = (request, response) => {
    pool.query('SELECT * FROM branches ORDER BY ifsc DESC limit 1 offset 1',(error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

module.exports = {getSearch,
getBranch
}