 let lightSide = require('./db.json')


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
        res.status(200).send(lightSide)
    },
    addCharacter: (req, res) => {
    const { name, type } = req.body
        lightSide.push({
            id: globalId,
            name,
            type,
    })
    globalId++

       res.status(200).send(lightSide)
    },
    // deleteCharacter: (req, res) => {
    //     let lightSide = require('./db.json')
    //     const { name } = req.params;
    //     for (let i = 0; lightSide.length; i++){
    //         if (lightSide[i]=== +name){
    //             lightSide.splice(i, 1)
    //             return res.status(200).send(lightSide)
    //         }
    //     }
    //     res.status(400).send("User not found.")
        // },
        getPizza: (req, res) => {
            let za = ["PEP", "CHEESE", "MEET LOVERS"]
            res.status(200).send(za)
        },
        getCharlie: (req, res) => {
            let charlie =  "https://pbs.twimg.com/media/Fe0ol9_UYAE-wvf?format=jpg&name=large"
            res.status(200).send(charlie)
        }
    }