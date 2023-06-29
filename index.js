const express = require('express');
const app = express();

app.get('/programming-language', (req, res) => {
  res.send('Python!');
});

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Stage 2 running at http://localhost:${PORT}`),
);


// Command to start this project
// 1. npm run start