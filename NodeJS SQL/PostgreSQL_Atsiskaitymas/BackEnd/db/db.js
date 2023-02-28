import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { DBconnection } = process.env;

const pool = new pg.Pool({
  DBconnection,
});

export default pool;
