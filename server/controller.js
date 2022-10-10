 let lightSide = [
    {
    name: 'ObiWan',
    type: 'jedi',
    id: 0
    },
    {
    name:'Luke',
    type: 'padawan and my favorite character',
    id: 1
    },
    {
    name:'Yoda', 
    type: 'grand master',
    id: 2
    },
    {
    name:'Leia', 
    type: 'rebellion leader',
    id: 3
    },
    {
    name: 'Chewy', 
    type: 'RRWWWGG', 
    id: 4
    },
    {
    name: 'Anakin',
    type: 'not a jedi master', 
    id: 5
    },
    {
    name: 'Ashoka Tano',
    type: 'Also Favorite character',
    id: 6
    }


]
let globalId = lightSide.length

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
    const { name } = req.body
        lightSide.push({
            id: globalId,
            name,
            type,
    })
       res.status(200).send(name)
    }
}
