const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://vlad95:roller_95@cluster0.bexl1u6.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB Connection successfull'))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log('backend server is running');
});
