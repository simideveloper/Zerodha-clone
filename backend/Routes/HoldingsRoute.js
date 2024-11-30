const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/verifyToken");

const { index } = require("../Controllers/holdingsController");

router.get("/index", verifyToken, index);

module.exports = router;
