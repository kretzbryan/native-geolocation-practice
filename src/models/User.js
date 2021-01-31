const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

// USE KEYWORD FUNCTION TO USE 'this' KEYWORD INSIDE FUNCTION!
// If you use an arrow function, the 'this' keyword will target the entire file, which is not what we want in this case.
userSchema.pre('save', function (next) {
	const user = this;
	// if the password hasnt been changed, move on.
	if (!user.isModified('password')) {
		return next();
	}
	// if it has in any way, we salt the new password and store it as the users password
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

// AGAIN! USE THE KEYWORD FUNCTION!!!!
// This will compare your password to the hashing algo, and added as a method to the userSchema
userSchema.methods.comparePassword = function (candidatePassword) {
	const user = this;
	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
			if (err) {
				return reject(err);
			}
			if (!isMatch) {
				return reject(false);
			}
			resolve(true);
		});
	});
};

mongoose.model('User', userSchema);
