const express = require('express');
const app = express();
const port = 8080;

app.get('/query', (req, res) => {
  const response = [
    {
      stock: 'AAPL',
      top_bid: { price: 120, size: 10 },
      top_ask: { price: 121, size: 10 },
      timestamp: new Date(),
    },
    {
      stock: 'GOOG',
      top_bid: { price: 1500, size: 5 },
      top_ask: { price: 1501, size: 5 },
      timestamp: new Date(),
    },
  ];
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
