
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome To Kayode Adeyemi First CI project. Thanks 3mtt');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


