const { default: axios } = require("axios");
let characters = []

axios.get("https://swapi.dev/api/people").then(res => characters = res.data.results)

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Smart Cookie You Are!", "devMountain is the place to be!", "You can do it, just keep swimming"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getCharacter: (req, res) => {
        res.status(200).send(randomFortune)
    }

}