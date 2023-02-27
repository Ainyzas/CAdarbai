export function checkLimit(req, res, next) {
  if (!req.query.limit) {
    res.json({ error: 'no limit defined' });
  } else {
    next();
  }
}

export function checkBody(req, res, next) {
  if (!req.body.title) {
    res.json({ error: 'no body defined' });
  } else {
    next();
  }
}

export function checkForId(req, res, next) {
  if (!req.params.id) {
    res.json({ error: 'no id given' });
  } else {
    next();
  }
}
