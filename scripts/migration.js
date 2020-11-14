const fs = require('fs');
const mongoose = require('mongoose');
const Affiliates = require('../src/models/affiliates');

mongoose
  .connect('mongodb+srv://<user>:<pass>@amebotest.w3uxb.gcp.mongodb.net/amebo-tst?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(e => console.log(e));

const affiliatesData = JSON.parse(fs.readFileSync(`${__dirname}/affiliatesMock.json`, 'utf-8'));

const importData = async () => {
  try {
    await Affiliates.create(affiliatesData);
    console.log('Data succefully loaded!');
    process.exit();
  } catch (e) {
    console.log('create error', e);
  }
};

importData();
