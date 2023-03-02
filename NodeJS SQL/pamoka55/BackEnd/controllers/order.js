import DB from '../db/db.js';

export async function getOrdersByCustomers(req, res) {
  try {
    const { id } = req.params;
    const orders = await DB.query(`SELECT customers.id as customer_id,
    name, address, phone, description, price, orders.id as order_id
    FROM customers join orders on customers.id = orders.customers_id
    where customers.id = ${id}`);

    res.json(orders.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postOrder(req, res) {
  try {
    const { id } = req.params;
    const { description, price } = req.body;

    const order = await DB.query(`
    insert into orders (description, customers_id, price)
    values ('${description}', ${id}, ${price})
    returning id, customers_id, description, price
  `);

    res.json(order.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
