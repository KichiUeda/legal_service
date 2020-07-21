require('dotenv').config();
const express = require('express');
const pg = require('../database/model.js');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/api/:productId', (req,res) => {
  let product_id = req.params.productId;
  console.log(`request for product: ${product_id}`);
  pg('statements').where({
    product_id
  }).select('statement')
  .then((data) => {
    //console.log(data);
    res.send(data[0].statement);
  })
  .catch((err) => {
    console.log(err);
    res.end(404);
  })
})

const port = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server is Live! Listening on PORT: ${process.env.PORT}`);
});