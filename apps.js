// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! Bienvenue dans mon appli web.');
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
