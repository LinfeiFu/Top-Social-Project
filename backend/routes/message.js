const express = require("express");
const { getMessage } = require("../controllers/messsageController")
const messageRouter = express.Router();

messageRouter.get("/", getMessage)

module.exports = messageRouter;