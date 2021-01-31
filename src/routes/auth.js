const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
	console.log(req.body);
	try {
		const newUser = new User(req.body);
		await newUser.save();
		res.send('user saved!');
	} catch (err) {
		res.send(err.message);
	}
});

module.exports = router;
