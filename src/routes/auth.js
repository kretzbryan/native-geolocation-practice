const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {
	try {
		res.send('You made a post request!');
	} catch (err) {}
});

module.exports = router;
