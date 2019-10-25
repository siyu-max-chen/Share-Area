var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = mongoose.Schema({
    username: String,
    password: String,
		email: {type: String, unique: true, require: true},
		resetPasswordToken: String,
		resetPasswordExpires: Date,
		avatar: {type: String, default: 'https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?fit=300%2C300&ssl=1'},
		firstName: {type: String, default: ''},
		lastName: {type: String, default: ''},
		isAdmin: {type: Boolean, default: false}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);