const express = require("express");
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./src/routers/userRouter.js");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/", userRouter); // new

// app.get("/", (req, res) => {
//   //   res.send("Hello World!");
//   //   res.send("<h1>Hello World!</h1>");
//   res.send("<h1>Users</h1><br/><h1>Products</h1>");
//   //   res.send(arr);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
