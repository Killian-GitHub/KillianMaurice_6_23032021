const express = require("express");
const saucesController = require("../controller/sauces");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer_config");


router.post("/", auth, multer, saucesController.createThing);

router.get("/:id", auth, saucesController.getOneThing);

router.put("/:id", auth, multer, saucesController.modifyThing);

router.delete("/:id", auth, saucesController.deleteThing);

router.get("/", auth, saucesController.getAllSauces);


module.exports = router;