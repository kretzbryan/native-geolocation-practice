const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const config = require('config');

router.post('/signup', async (req, res) => {
	try {
		const newUser = new User(req.body);
		const token = jwt.sign({ userId: newUser._id }, config.jwtSecret);
		await newUser.save();
		res.send({ token });
	} catch (err) {
		res.send(err.message);
	}
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(422).send({ error: 'Must Provide email and password' });
	}

	const user = await User.findOne({ email });
	if (!user) {
		return res.status(401).send({ error: 'Invalid password or email' });
	}
	try {
		await user.comparePassword(password);
		const token = jwt.sign({ userId: user._id }, config.jwtSecret);
		res.send({ token });
	} catch (err) {
		res.status(401).send({ error: 'Invalid password or email' });
	}
});

module.exports = router;
