const express = require("express");
const { getCardById, postCard, deleteCardById } = require("../controllers/cardsController")
const cardsRouter = express.Router();

//GET card by Id: /api/cards?id=1
cardsRouter.get("/", getCardById);


//POST new card   /api/cards
cardsRouter.post("/", postCard)


//DELETE a card   /api/cards/:card_id
cardsRouter.delete("/:card_id", deleteCardById)

module.exports = cardsRouter;