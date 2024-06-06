const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { User } = require('./models');

const app = express();
app.use(bodyParser.json());

// Создание пользователя
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });

  // Отправка события в сервис истории действий
  axios.post('http://localhost:4000/actions', {
    userId: user.id,
    action: 'created',
  });

  res.status(201).json(user);
});

// Изменение пользователя
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  await User.update({ name, email }, { where: { id } });

  // Отправка события в сервис истории действий
  axios.post('http://localhost:4000/actions', {
    userId: id,
    action: 'updated',
  });

  const updatedUser = await User.findByPk(id);
  res.status(200).json(updatedUser);
});

// Получение списка пользователей
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`User Service is running on port ${PORT}`);
});
