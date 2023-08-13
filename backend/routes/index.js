const express = require("express");
const axios = require("axios");
const cors = require("cors");
const profileRouter = require("./profile");

//create main router
const router = express.Router();

router.use(profileRouter);
module.exports = router;

