const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    surname: String,
    following: Array,
    follower: Array,
    blockList: Array,
    stories: Array,
    notifications: Array,
    posts: Array,
    id: String,
    isPublic: Boolean,
    bio: Object,
    email: String,
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
