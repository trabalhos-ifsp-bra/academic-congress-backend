const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const expressOasGenerator = require('express-oas-generator');

const app = express();

app.use(cors());
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
require('./routes/index')(app);

expressOasGenerator.init(app, {}, './docs/swagger.json');

const {
  user,
  password,
  url,
  port,
  databaseName,
} = require('./config').db;

const mongoUrl = `mongodb://${user}:${password}@${url}:${port}/${databaseName}`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).catch(e => console.log(`Error: ${e.message}`));
mongoose.Promise = require('bluebird');

app.listen(3000, () => console.log('listennig on port 3000'));
