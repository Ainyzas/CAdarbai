import DB from '../db/db.js';

export async function getAllCars(req, res) {
  try {
    const cars = await DB.query('SELECT id, title, image, price, numberplates FROM cars');
    res.json(cars.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
