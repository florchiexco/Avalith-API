//Lectura de la API

async function readAPIcats(){
    try{
        var response= await fetch("https://cat-fact.herokuapp.com/facts");
        var data = await response.json();
        return data;
    }
    catch(error){
        throw(error);
    }
}

readAPIcats().then(function(data){
    arregloTotalFacts = data;
  })
  .catch(function(e) {
    console.error("No se encuentra el archivo json");
    console.log(e);
  });

 
//Primer funcion llamada

var arregloTotalFacts;

window.onload = function(){
    readAPIcats().then((data) => {
        arregloTotalFacts = data;
        inicio();
    })
}

function getRandom(){
    return Math.floor(Math.random() * 205);
}

function inicio(){
    i = getRandom();
    console.log("adsas", i);
    console.log(arregloTotalFacts.all[i].user.name);
    console.log(arregloTotalFacts.all);
    //alert(arregloTotalFacts.all[i].text);
    actualizarFactContent();
    actualizarFact();
}

//Funciones que actualizan el HTML
function actualizarFactContent(){
    document.getElementById("factContent").innerHTML = arregloTotalFacts.all[i].text;
    document.getElementById("user").innerHTML = arregloTotalFacts.all[i].user.name.first;

}

//Manejo de las imágenes

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

var img;
function añadirImagen(){
    img= document.createElement("img");
    img.setAttribute("src", "img/" + numeroAleatorio(1,10)+ ".jpg");
    img.setAttribute("height","250");
    document.getElementById("contenedorFoto").appendChild(img);
}
document.addEventListener("DOMContentLoaded", añadirImagen);