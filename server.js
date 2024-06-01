const mongoose = require('mongoose');

const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'));
// to get the environment we are working in
// console.log(app.get('env'));
//to get all Varialn]bls
// console.log(process.env);

// console.log(process.env);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
