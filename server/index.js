require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const port = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server is Live! Listening on PORT: ${process.env.PORT}`);
});