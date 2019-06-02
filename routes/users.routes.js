const router = require('express').Router();
const User = require('../controllers/users.controller');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      permission,
    } = req.body;

    const user = {
      username,
      email,
      password,
      permission,
    };

    const created = await User.createUser(user);
    return res.status(201).json(created);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.getUserById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const allUsers = await User.getAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    const updated = await User.updateUser(id, user);

    return res.status(200).json(updated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await User.removeUser(req.params.id);

    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/authenticate', async (req, res) => {
  try {
    const { email, password } = req.body;

    const authenticated = await User.login(email, password);

    return res.status(200).json(authenticated);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = app => app.use('/users', router);
