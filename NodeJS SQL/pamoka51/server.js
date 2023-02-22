import pg from 'pg';
import express from 'express';
const pool = pg.Pool;

const PORT = 3000;
const connectionString = 'postgres://jjlswkhh:cCQj4_i8cfVUTLHebjyzl0CsufKizPBK@mouse.db.elephantsql.com/jjlswkhh';

const PGpool = new pool({
  connectionString,
});

const app = express();

app.get('/people', async (req, res) => {
  const people = await PGpool.query('SELECT * FROM persons');

  res.json(people.rows);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
