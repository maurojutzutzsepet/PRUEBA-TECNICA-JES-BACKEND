const express = require('express');
const cors = require('cors');
const app = express();
var path = require('path');

//SETTINGS
app.set('port', process.env.PORT || 4000);

//midlewares
app.use(cors());
app.use(express.json());
//renderiza frontend estatico de react
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/fiscalias', require('./routes/fiscalias'));


module.exports = app;