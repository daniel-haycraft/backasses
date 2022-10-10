
const complimentBtn = document.getElementById("complimentBtn")
const fortuneBtn = document.getElementById('fortuneBtn')
const getChar = document.getElementById('characterBtn')
const addChar = document.getElementById('addChar')


// destructer??? in here
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
    axios.get("http://localhost:4000/api/character/")
        .then(res => {
            for (let i = 0; res.data.results.length > i; i++){
                const newEl = document.createElement('p')
                newEl.textContent = res.data.results[i]
                document.body.appendChild(newEl)
            }
        })
    .catch(err => console.log(err))
}

function addCharacter(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/api/character/', { name: ' ', type: 'your fave character' })
    .then (res => res.data[' '])
        
    .catch(err => console.log(err))
}
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getChar.addEventListener('click', getCharacter)
// addChar.addEventListener('click', addCharacter)