
const complimentBtn = document.getElementById("complimentBtn")
const fortuneBtn = document.getElementById('fortuneBtn')
const addCharBtn = document.getElementById('addChar')
const getChar =document.getElementById('charlie')
const deleteChar = document.getElementById('deleteBtn')
let na = document.getElementById('char')
let type = document.getElementById('type')
let bby = document.getElementById('bby')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

function getCharacter() {
    axios.get("http://localhost:4000/api/character")
        .then(res => {
            const charContainer = document.getElementById('character-container')
            for (let i = 0; res.data.length > i; i++){
                const newEl = document.createElement('li')
                const diffEl = document.createElement('ul')
                const aEl = document.createElement('ul')
                
                newEl.textContent = res.data[i].name
                diffEl.textContent = res.data[i].type
                aEl.textContent = res.data[i].BBY
                newEl.addEventListener('click', () => {
                    deleteCharacter(res.data[i].id)
                })
                charContainer.appendChild(newEl)
                charContainer.appendChild(aEl)
                charContainer.appendChild(diffEl)
            }
        })
};
function addCharacter(){
    axios.post("http://localhost:4000/api/newcharacter", {
        name: na.value,
        type: type.value,
        bby: bby.value

    })
    .then(res => res.data)
    .catch(err => console.log(err))
}

function getPizza(){
    axios.get("http://localhost:4000/api/pizza")
    .then(res => {
        for(let i = 0; res.data.length > i; i++){
        const pizza = document.createElement('ul')
        pizza.textContent = res.data[i]
        document.body.appendChild(pizza)
        }
    })
}
   function getCharlie(){
        axios.get('http://localhost:4000/api/picture')
        .then(res => {
             const char = document.createElement('li')
             char.textContent = res.data
           document.body.appendChild(char)

        })     

        .catch(err => console.log(err))
    }

function deleteCharacter(id){
    axios.delete(`http://localhost:4000/api/character/${id}`)
    .then(res => {
        const charContainer = document.getElementById('character-container')
        charContainer.innerHTML = ' '
        for (let i = 0; res.data.length > i; i++){
            const newEl = document.createElement('li')
            const diffEl = document.createElement('ul')
            const aEl = document.createElement('ul')
            diffEl.textContent = res.data[i].type
            newEl.textContent = res.data[i].name
            aEl.textContent = res.data[i].BBY
            newEl.addEventListener('click', () => {
                deleteCharacter(res.data[i].id)
            })
            charContainer.appendChild(newEl)
            charContainer.appendChild(diffEl)
            charContainer.appendChild(aEl)
        }
    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addCharBtn.addEventListener('click', addCharacter)
getChar.addEventListener('click', getCharlie)


getCharacter()
// getPizza()
