const express = require("express");
const auth = require('src/middlewares/auth');
const router = express.Router();

app.get('/profile', auth, async (req, res) => {
    try {
      const user = await User.findById(req.userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
});
  
  app.put('/profile', auth, async (req, res) => {
    const { bio, phone, photo, isPublic } = req.body;
  
    try {
      const user = await User.findById(req.userId);
      user.bio = bio;
      user.phone = phone;
      user.photo = photo;
      user.isPublic = isPublic;
      await user.save();
      res.json({ message: 'Profile updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;