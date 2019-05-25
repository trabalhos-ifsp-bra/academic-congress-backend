const express = require('express');
const expressOasGenerator = require('express-oas-generator');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
require('./routes/index')(app);

expressOasGenerator.init(app, {}, './docs/swagger.json');

const { user, password, url, port, databaseName } = require('./config').db;
const mongoUrl = `mongodb://${user}:${password}@${url}:${port}/${databaseName}`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).catch(e => console.log(`Error: ${e.message}`));
mongoose.Promise = require('bluebird');

app.listen(3000, () => console.log(`listennig on port 3000`))
