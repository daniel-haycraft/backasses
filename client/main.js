
const complimentBtn = document.getElementById("complimentBtn")
const fortuneBtn = document.getElementById('fortuneBtn')
const getChar = document.getElementById('characterBtn')
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune= () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getCharacter = () => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
        for(let i = 0; res.data.results[0].name.length; i++){
            const newEl = document.createElement('p')
            newEl.textContent = res.data.results[0].name[i]
            document.body.appendChild(newEl)
            

    }   
    })
    .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getChar.addEventListener('click', getCharacter)