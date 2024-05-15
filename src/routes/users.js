const express = require("express");
const isAdmin = require('src/middlewares/auth');
const router = express.Router();

app.get('/users', isAdmin, async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
});
  
app.get('/user/:id', auth, async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        if (!user.isPublic && !req.isAdmin) {
        return res.status(403).json({ message: 'Access forbidden' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;