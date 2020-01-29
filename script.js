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

var arregloTotalFacts;

function traerDatosFacts(data){
    arregloTotalFacts=data;
    console.log(arregloTotalFacts);
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
    document.getElementById("contenedor").appendChild(img);
}
document.addEventListener("DOMContentLoaded", añadirImagen);