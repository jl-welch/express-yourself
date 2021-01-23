const express = require("express");

const router = express.Router();

const Controller = require("../controllers/Dashboard");

router.get("/", Controller.index);

module.exports = router;
