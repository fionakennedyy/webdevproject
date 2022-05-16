const express = require('express');
const User = require('../models/userM');
const router = express.Router();

router
  .get('/', (req, res) => {
    try {
      const users = User.getUsers();
      res.send(users);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/registerpage', async (req, res) => {
  try {
    const user = await User.register(req.body);
    res.send({...user, password: undefined});
  } catch (error) {
    res.status(401).send({message: error.message});
  }
})

module.exports = router;