const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/jsonp', (req, res) => {
  const result = [{ group: 'New Jeans' }, { group: 'IVE' }];
  res.jsonp(result);
});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
