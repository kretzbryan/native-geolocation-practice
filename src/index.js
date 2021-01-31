const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const config = require('config');
const mongoURI = config.mongoURI;
const auth = require('./routes/auth');

app.use(auth);

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

app.get('/', (req, res) => {
	res.send('Hi there!');
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
