const verifyToken = require("../middleware/authJwt");
const router = require("express").Router();
const controller = require("../controllers/authController");

router.post('/signup/amidelu', controller.signup);

router.post("/login", controller.signin);

module.exports = router;
