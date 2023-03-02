import DB from '../db/db.js';

export async function getCustomers(req, res) {
  try {
    const customers = await DB.query('SELECT id, name, address, phone FROM customers');

    res.json(customers.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postCustomer(req, res) {
  try {
    const { name, address, phone } = req.body;

    const customer = await DB.query(
      `INSERT INTO customers (name, address, phone) VALUES ('${name}', '${address}', '${phone}') 
      returning id, name, address, phone`,
    );

    res.json(customer.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
