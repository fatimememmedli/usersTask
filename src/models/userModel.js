const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    surname: { type: String },
    password: { type: String },
    following: { type: Array, default: [] },
    follower: { type: Array, default: [] },
    blockList: { type: Array, default: [] },
    stories: { type: Array, default: [] },
    notifications: { type: Array, default: [] },
    posts: [
      {
        id: { type: String },
        imgSRC: { type: String },
        tittle: { type: String },
      },
    ],
    id: { type: String },
    isPublic: { type: Boolean },
    isAdmin: { type: Boolean, default: false },
    bio: { type: String },
    email: { type: String },
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
