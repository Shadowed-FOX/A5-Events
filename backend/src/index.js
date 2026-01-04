// src/index.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API działa');
});

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});