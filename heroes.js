let json = `[
    {
        "name": "Batman",
        "image": "assets/images/batman.jpeg",
        "description" : {
            "Universe": "DC Comics",
            "AlterEgo": "Bruce Wayne",
            "Occupation": "Crime fighter, philanthropist, billionaire",
            "Superpowers": "Intelligence, vast knowledge, knowledge of martial arts, agility"
        }
    },
    {
        "name": "Superman",
        "image": "assets/images/superman.jpeg",
        "description" : {
            "Universe": "DC Comics",
            "AlterEgo": "Clark Kent",
            "Occupation": "Fighter for justice",
            "Superpowers": "Impenetrable, super strength, flight, self-healing, super vision and super hearing, cool suit"
        }  
    },
    {
        "name": "Iron Man",
        "image": "assets/images/ironman.jpeg",
        "description" : {
            "Universe": "Marvel Comics",
            "AlterEgo": "Tony Stark",
            "Occupation": "Genius, billionaire, playboy, philanthropist",
            "Superpowers": "High level of intelligence, wide knowledge of science and technology, connection to the world wide web, armored suits"
        }  
        
    },
    {
        "name": "Black Widow",
        "image": "assets/images/romanoff.jpeg",
        "description" : {
            "Universe": "Marvel Comics",
            "AlterEgo": "Natasha Romanoff",
            "Occupation": "Superheroine, spy",
            "Superpowers": "Peak human physical potential, slow aging, knowledge of many languages"
        }  
        
    }
]`;

document.addEventListener("DOMContentLoaded", function (event) {
let heroes = JSON.parse(json);

let heroesContent = "";

for (let hero of heroes) {
    heroesContent += `<div class="hero">
        <h2>${hero.name}</h2>
        <img src="${hero.image}" style="width:300px"/>
        <div>${hero.description.Universe}</div>
        <div>${hero.description.AlterEgo}</div>
        <div>${hero.description.Occupation}</div>
        <div>${hero.description.Superpowers}</div>
        <label for="rate">Rate the hero (out of 10):</label>
        <input type="number" id="rate" name="rate"><button data-name="${hero.name}" type="button" onclick="setToLS(event)">Save</button>
        </div>`;
}

document.getElementById("heroesContainer").innerHTML = heroesContent;
});

function setToLS(event) {
    for (i=0; i< heroes.length; i++) {
        let key = heroes[i].name;
        console.log(key)
    // let rate = document.getElementById("rate").value; - нельзя в цикле использовать id
    // пара ключ-значение по каждому герою
    // console.log(event.target.previousSibling.value)
    // console.log(event.target.dataset.name)
    }

    localStorage.setItem(key, JSON.stringify(rate))
} 

  
  
  