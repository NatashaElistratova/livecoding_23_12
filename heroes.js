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
// Variant 1
// document.addEventListener("DOMContentLoaded", function (event) {
// let heroes = JSON.parse(json);

// let heroesContent = "";

// for (let hero of heroes) {
//     hero.rating = JSON.parse(localStorage.getItem(hero.name));
//     heroesContent += `<div class="hero">
//         <h2>${hero.name}</h2>
//         <img src="${hero.image}" style="width:300px"/>
//         <div>${hero.description.Universe}</div>
//         <div>${hero.description.AlterEgo}</div>
//         <div>${hero.description.Occupation}</div>
//         <div>${hero.description.Superpowers}</div>
//         <label for="rate">Rate the hero (out of 10):</label>
//         <input type="number" name="rate" value="${hero.rating}"><button data-name="${hero.name}" type="button" onclick="setToLS(event)">Save</button>
//         </div>`;
// }

// document.getElementById("heroesContainer").innerHTML = heroesContent;
// });

// function setToLS(event) {
//     const heroName = event.target.dataset.name;
//     const heroRating = event.target.previousSibling.value;
//     localStorage.setItem(heroName, JSON.stringify(heroRating));
// }


// Variant 2
// document.addEventListener("DOMContentLoaded", function (event) {
// let heroes = JSON.parse(json);

// let heroesContent = "";

// for (let hero of heroes) {
//     hero.rating = JSON.parse(localStorage.getItem('ratings'))[hero.name];
//     heroesContent += `<div class="hero">
//         <h2>${hero.name}</h2>
//         <img src="${hero.image}" style="width:300px"/>
//         <div>${hero.description.Universe}</div>
//         <div>${hero.description.AlterEgo}</div>
//         <div>${hero.description.Occupation}</div>
//         <div>${hero.description.Superpowers}</div>
//         <label for="rate">Rate the hero (out of 10):</label>
//         <input type="number" name="rate" value="${hero.rating}"><button data-name="${hero.name}" type="button" onclick="setToLS(event)">Save</button>
//         </div>`;
// }

// document.getElementById("heroesContainer").innerHTML = heroesContent;
// });

// function setToLS(event) {
//     const heroName = event.target.dataset.name;
//     const heroRating = event.target.previousSibling.value;
//     const ratings = JSON.parse(localStorage.getItem('ratings'));
//     ratings[heroName] = heroRating;
//     localStorage.setItem('ratings', JSON.stringify(ratings));
// }

// Variant 3
document.addEventListener("DOMContentLoaded", function (event) {
    if(!localStorage.getItem('heroes')) {
        localStorage.setItem('heroes', json)
    }
    let heroes = JSON.parse(localStorage.getItem('heroes'));
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
            <input type="number" name="rate" value="${hero.rating || 0}"><button data-name="${hero.name}" type="button" onclick="setToLS(event)">Save</button>
            </div>`;
    }
    
    document.getElementById("heroesContainer").innerHTML = heroesContent;
    });
    
    function setToLS(event) {
        const heroesFromLS = localStorage.getItem('heroes');
        const heroes = JSON.parse(heroesFromLS);
        const heroName = event.target.dataset.name;
        const heroRating = event.target.previousSibling.value || '';
        const hero = heroes.find(item => item.name === heroName);
        hero.rating = heroRating;
        localStorage.setItem('heroes', JSON.stringify(heroes));
    }
  
  