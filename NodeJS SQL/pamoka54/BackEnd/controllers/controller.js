import DB from '../db/db.js';

export async function getItems(req, res) {
  try {
    const { limit } = req.query;
    const items = await DB.query(`SELECT id, title FROM items ORDER BY id asc limit ${limit}`);

    res.json(items.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function postItem(req, res) {
  try {
    const { title } = req.body;
    const item = await DB.query(`INSERT INTO items (title) VALUES ('${title}')`);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteItem(req, res) {
  try {
    const { id } = req.params;
    const item = await DB.query(`DELETE FROM items WHERE id = ${id}`);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
