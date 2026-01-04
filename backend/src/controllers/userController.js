// src/controllers/userController.js
const prisma = require('../config/db'); 

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body; 
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, getAllUsers };