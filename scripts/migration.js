const fs = require('fs');
const mongoose = require('mongoose');
const Partners = require('../src/models/partners');

mongoose
  .connect('mongodb+srv://admintest:12341234@amebotest.w3uxb.gcp.mongodb.net/amebo-tst?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch(e => console.log(e));

const partnersData = JSON.parse(fs.readFileSync(`${__dirname}/partnersMock.json`, 'utf-8'));

const importData = async () => {
  try {
    await Partners.create(partnersData);
    console.log('Data succefully loaded!');
    process.exit();
  } catch (e) {
    console.log('create error', e);
  }
};

const deleteData = async () => {
  try {
    await Partners.deleteMany();
    console.log('Data succefully deleted!');
    process.exit();
  } catch (e) {
    console.log(e);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
