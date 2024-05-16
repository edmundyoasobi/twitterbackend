const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: String,
  //profileImage : Buffer
  bio: String,
  userName : {
    type : String,
    unique : true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  profileImagePath : String,
  retweets: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
    default : []
  },
  tweets: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
    default : []
  },
  likedTweets: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
    default : []
  },

});

//moongoose hook
// fire the function after doc saved to db
//like middleware we need to call next()
//doc is the document we saved to the database
UserSchema.post("save", function (doc, next) {
  next();
});

// fire the function before doc saved to db
//in this function we able to access this which is the document we are about to save
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", UserSchema);
