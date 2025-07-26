const jwt = require('jsonwebtoken');
module.exports.verifyToken = (req, res, next) => { /* read header + verify */ };
module.exports.verifyAdmin = (req, res, next) => {
  // verifyToken ran, check req.user.role === 'admin'
};
