const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getCharacter } = require('./controller')
const { addCharacter } = require('./controller')
const { getPizza } = require('./controller')
const { getCharlie } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/character", getCharacter)
app.post("/api/newcharacter", addCharacter)
app.get("/api/pizza", getPizza)
app.get("/api/picture", getCharlie)
app.listen(4000, () => console.log("Server running on 4000"));
