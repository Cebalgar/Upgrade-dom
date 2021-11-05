//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton =document.querySelector(".showme");
    console.log(boton.innerHTML);


//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const titulo =document.querySelector("#pillado");
console.log(titulo.innerHTML);

//1.3 Usa querySelector para mostrar por consola todos los p
const paragraphs= document.querySelectorAll("p");
console.log(paragraphs);
paragraphs.forEach(parag=>{console.log(parag.innerHTML);

})


//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
pokemons.forEach(poke=>{console.log(poke.innerHTML);
})

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const atributo= document.querySelectorAll("[data-function]");
atributo.forEach(heroe=>{console.log(heroe.innerHTML);
})



// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".


console.log(atributo[2].innerHTML);
