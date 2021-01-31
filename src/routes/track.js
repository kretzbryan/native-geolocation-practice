const express = require('express');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const Track = mongoose.model('Track');
const User = mongoose.model('User');

const router = express.Router();

// Will add auth middleware to run on each request.
router.use(auth);

router.get('/tracks', async (req, res) => {
	try {
		const tracks = await Track.find({ userId: req.user._id });
		res.send(tracks);
	} catch (err) {}
});

router.post('/tracks', async (req, res) => {
	const { name, locations } = req.body;

	if (!name || !locations) {
		return res
			.status(422)
			.send({ error: 'You must provide a name and locations' });
	}
	try {
		const track = new Track({ name, locations, userId: req.user._id });
		await track.save();
		res.send(track);
	} catch (err) {
		res.status(422).send({ error: err.message });
	}
});

module.exports = router;
