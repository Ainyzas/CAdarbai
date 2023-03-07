import DB from '../db/db.js';

export async function getAllProducts(req, res) {
  try {
    const products = await DB.query('SELECT id, title, image, price FROM products');

    res.status(200).json(products.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;

    const product = await DB.query(`SELECT id, title, image, price FROM products WHERE id = ${id}`);

    res.status(200).json(product.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getOrderById(req, res) {
  try {
    const { id } = req.params;

    const order =
      await DB.query(`SELECT products.id AS product_id, orders.id AS order_id, title, image, price, customer_name, customer_email
      FROM products JOIN orders on products.id = orders.product_id WHERE orders.id = ${id}`);

    res.status(200).json(order.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postNewProduct(req, res) {
  try {
    const { title, image, price } = req.body;

    const product = await DB.query(`INSERT INTO products (title, image, price) VALUES ('${title}', '${image}', ${price})
    returning id, title, image, price`);

    res.status(200).json(product.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postNewOrder(req, res) {
  try {
    const { customer_name, customer_email } = req.body;
    const product_id = req.params.id;
    const ip = req.ip.replace('::ffff:', '');

    const order = await DB.query(`INSERT INTO orders (customer_name, customer_email, product_id, ip, timestamp) 
      VALUES ('${customer_name}', '${customer_email}', ${product_id}, '${ip}', CURRENT_TIMESTAMP)
    returning id, product_id, customer_name, customer_email, ip, timestamp`);

    res.status(200).json(order.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteProductById(req, res) {}
