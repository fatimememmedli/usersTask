const router = require("express").Router();
const userControllers = require("./../controllers/userControllers");

router.post("/users", userControllers.postUser);
router.get("/users", userControllers.getAllUser);
router.get("/users/:id", userControllers.getUserById);
router.delete("/users/:id", userControllers.deleteUser);
router.patch("/users/:id", userControllers.updateUser);
router.put("/users/:id", userControllers.putUser);

module.exports = router;
