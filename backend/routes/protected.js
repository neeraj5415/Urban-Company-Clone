const express = require('express');
const { authenticateJWT, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/admin-only', authenticateJWT, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin!', user: req.user });
});

module.exports = router; 