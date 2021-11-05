

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let otherDiv=document.createElement("div");
document.body.appendChild(otherDiv);
let parag= document.createElement("p");
otherDiv.appendChild(parag);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDivN= document.createElement("div");
document.body.appendChild(newDivN);

for( let i= 0; i<6; i++){
  let parrafos=document.createElement("p");
newDivN.appendChild(parrafos);
}
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP =document.createElement("p");
document.body.appendChild(newP);
let t =document.createTextNode("Soy dinámico!");
newP.appendChild(t);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let subTitulo= document.querySelector("h2.fn-insert-here");
subTitulo.textContent= "Wubba Lubba dub dub";


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

let listaNode= document.createElement("ul");
document.body.appendChild(listaNode);

apps.forEach(app=>{
  listaNode.innerHTML += `<li>${app}</li>`;
})


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let deleteNodo = document.querySelectorAll(".fn-remove-me");
deleteNodo.remove();

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.




let contenedor1 = document.getElementById("contenedor1");
let newParag = document.createElement("p");
let newText = document.createTextNode("Voy en medio!");
newParag.appendChild(newText)
contenedor1.appendChild(newParag);



//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let currentDivClass = document.getElementsByClassName("fn-insert-here");
let newElement = document.createElement("p");
let newContent = document.createTextNode("Voy dentro!");
newElement.appendChild(newContent);
currentDivClass.appendChild(newElement);



