import DB from '../db/db.js';

export async function getProductsPaginated(req, res) {
  try {
    const { page, size } = req.query;

    const products = await DB.query(
      `SELECT id, name, description, price FROM products ORDER BY id ASC LIMIT ${size} OFFSET ${(page - 1) * size}`,
    );

    const count = await DB.query(`select count(id) from products`);
    const rowCount = count.rows[0].count;

    const resObj = {
      totalPages: Math.ceil(rowCount / size),
      data: products.rows,
    };

    res.json(resObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await DB.query('SELECT id, name, description, price FROM products');
    res.json(products.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;

    const product = await DB.query(`SELECT id, name, description, price FROM products where id=${id}`);

    res.json(product.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createNewProduct(req, res) {
  try {
    const { name, description, price } = req.body;

    const product = await DB.query(`insert into products (name, description, price)
          values ('${name}', '${description}', ${price})`);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateProductById(req, res) {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const product = await DB.query(
      `update products set name='${name}', description='${description}', price=${price} where id=${id}`,
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteProductById(req, res) {
  try {
    const { id } = req.params;

    const product = await DB.query(`delete from products where id=${id}`);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function routeNotFound(req, res) {
  res.status(404).json({ error: 'Not Found' });
}
