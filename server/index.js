require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server is Live! Listening on PORT: ${process.env.PORT}`);
});