import express from 'express';
import data from '../../database/tasks2.js';
const router = express.Router();

router.get('/car/:make', (req, res) => {
  const brand = req.params.make;

  const result = data[brand];

  res.json(result);
});

export default router;
