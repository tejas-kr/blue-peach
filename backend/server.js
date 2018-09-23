const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

var Issue = require('./models/issue');

const app = express();
// const router = express.router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://django:django123@ds111963.mlab.com:11963/blue_peach', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
	console.log('db connected')
	
	require('./routes/issue')(app, Issue);
	
	app.listen(PORT, () => console.log('server started!'));
});

