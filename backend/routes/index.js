const express = require("express");
const axios = require("axios"); //去json server拿数据
const cors = require("cors");
const profileRouter = require("./profile");
const requestRouter = require("./request");
const messageRouter = require("./message");
const highlineRouter = require("./highline");
const cardsRouter = require("./cards");

//create main router
const router = express.Router();

router.use("/profile", profileRouter);
router.use("/request", requestRouter);
router.use("/message", messageRouter);
router.use("/highline", highlineRouter);
router.use("/cards", cardsRouter);

module.exports = router;

