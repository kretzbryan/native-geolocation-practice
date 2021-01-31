require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
const config = require('config');
const mongoURI = config.mongoURI;
const authRoute = require('./routes/auth');
const trackRoute = require('./routes/track');
const auth = require('./middleware/auth');

app.use(bodyParser.json());
app.use(authRoute);
app.use(trackRoute);

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Connected to mongodb');
});

mongoose.connection.error('error', (err) => {
	console.error('Error connecting to mongodb', err);
});

app.get('/', auth, (req, res) => {
	res.send(`Your email is ${req.user.email}`);
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
