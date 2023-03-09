export function handleRouteNotFound(req, res) {
  res.status(404).json({ error: 'route not found' });
}
