const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const postUser = async (req, res) => {
  const user = req.body


try{


  let findUserEmail = await User.findOne({ email:user.email });
  let findUserUsername = await User.findOne({ username:user.username });
  if (findUserEmail) {
    res.status(201).send("This email already used!");
  } 
  if (findUserUsername) {
    res.status(201).send("This username already used!");
  }  {
    const newUser = new User(req.body);
    newUser.save();
    res.status(200).send({
      message:"Qeydiyyatdan kecdi"
    })
  }
}catch{
  err=> {
    console.log(err)
    return err
  }
}
















  
};
const login = async (req, res) => {
  const user = req.body

try{


  let findUserPass = await User.findOne({ password:user.password, username:user.username });
  if (findUserPass ) {
    const token = jwt.sign({password:user.password, username:user.username},
      process.env.SECRET_TOKEN,
      {
        expiresIn:'1m'
      }
      )
    
    return res.status(200).send(token);

  } else{
    return  res.status(201).send("Invalid Username or Password!");
  }
   
}catch{
  err=> {
    console.log(err)
    return err
  }
}
















  
};
const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
  console.log(req.headers.authorization.split(" ")[1])
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
  login
};
