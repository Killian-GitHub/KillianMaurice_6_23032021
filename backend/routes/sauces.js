const express = require("express");
const saucesController = require("../controller/sauces");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer_config");


router.post("/", auth, multer, saucesController.createSauce);

router.get("/:id", auth, saucesController.getOneSauce);

router.put("/:id", auth, multer, saucesController.modifySauce);

router.delete("/:id", auth, saucesController.deleteSauce);

router.get("/", auth, saucesController.getAllSauces);


module.exports = router;