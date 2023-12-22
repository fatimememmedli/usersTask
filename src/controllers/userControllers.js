const User = require("./../models/userModel");

const postUser = async (req, res) => {
  let findUser = await User.findOne({ id: req.body.id });
  if (findUser) {
    res.send("bele id li obj var");
  } else {
    const newUser = new User(req.body);
    newUser.save();
  }
};

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};
const getUserById = async (req, res) => {
  let id = req.params.id;
  let find = await User.findOne({ id: id });
  res.send(find);
};
const deleteUser = async (req, res) => {
  let id = req.params.id;
  let find = await User.findOne({ id: id });
  let _id = find._id;
  let deletesUser = await User.findByIdAndDelete({ _id });
  console.log(deletesUser);
};
const updateUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await User.findOneAndUpdate({ id: id }, req.body);
};
const putUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await User.replaceOne({ id: id }, req.body);
};
module.exports = {
  postUser,
  getAllUser,
  getUserById,
  deleteUser,
  updateUser,
  putUser,
};
