const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const config = require('config');

router.post('/signup', async (req, res) => {
	console.log(req.body);
	try {
		const newUser = new User(req.body);
		const token = jwt.sign({ userId: newUser._id }, config.jwtSecret);
		await newUser.save();
		res.send({ token });
	} catch (err) {
		res.send(err.message);
	}
});

module.exports = router;
