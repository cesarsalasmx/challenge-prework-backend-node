const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/assets', (req, res) => {
  let file = path.join(__dirname, "asset/receipt.pdf");
  res.sendFile();
});

app.get('/products', (req, res) => {
  let storeProducts = '';
  res.json(storeProducts);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
const storeApi = require('../routes/store.js');
storeApi(app);