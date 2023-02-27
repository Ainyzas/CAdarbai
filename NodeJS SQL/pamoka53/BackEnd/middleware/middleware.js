export function middlewareTest(req, res, next) {
  if (!req.query.page || !req.query.size) {
    res.json({
      error: 'page or size not specified',
    });
  } else {
    next();
  }
}

// export function checkIfAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     res.json({
//       error: 'user is not authenticated',
//     });
//   }
// }
