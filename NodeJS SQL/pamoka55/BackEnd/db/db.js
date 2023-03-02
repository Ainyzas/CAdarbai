import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { connectionString } = process.env;

const pool = new pg.Pool({
  connectionString,
});

export default pool;
