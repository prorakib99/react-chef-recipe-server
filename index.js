const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef and Recipe server is Running')
})

app.listen(port, () => {
    console.log(`Chef and Recipe is running ${port}`)
  })