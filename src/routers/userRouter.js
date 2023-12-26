const router = require("express").Router();
const userControllers = require("./../controllers/userControllers");
const userAuth= require("./../middlewares/userAuthMidd")
router.post("/users", userControllers.postUser);
router.get("/users",userAuth, userControllers.getAllUser);
router.get("/users/:id", userControllers.getUserById);
router.delete("/users/:id", userControllers.deleteUser);
router.patch("/users/:id", userControllers.updateUser);
router.put("/users/:id", userControllers.putUser);
router.post("/login", userControllers.login);

module.exports = router;
