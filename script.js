//Variables utilizadas a lo largo del código

var arregloTotalFacts, contenedor,  arregloTotalFotos;

//Funciones para leer las APIs y JSON

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

async function readJSONphotos(){
    try{
        var response= await fetch("data/photos.json");
        var data = await response.json();
        return data;
    }
    catch(error){
        throw(error);
    }
}


//Funciones para guardar los datos de las APIs

readJSONphotos().then(function(data){
    arregloTotalFotos=data;
})


readAPIcats().then(function(data){
    arregloTotalFacts = data;
  })
  .catch(function(e) {
    console.error("No se encuentra el archivo json");
    console.log(e);
  });
 



 
//Funcion que carga los datos de la API en un arreglo (si es la primera vez que se entra a la página), si no, agarra los datos del localstorage

window.onload = function(){
    if(localStorage.getItem("facts")==null){
        readAPIcats().then((data) => {
            arregloTotalFacts = data;
            this.setStorage();
            this.readJSONphotos().then(this.cargarImagen);
            inicio();
        })
}
    else{
        this.arregloTotalFacts=JSON.parse(localStorage.getItem("facts"));
        this.readJSONphotos().then(this.cargarImagen);
        this.inicio();
    }
}

//Funciones de localStorage

function setStorage(){
    localStorage.setItem("facts", JSON.stringify(arregloTotalFacts));
}

//Funcion que muestra un hecho random

function inicio(){
    i = getRandom();
    console.log(arregloTotalFacts.all[i].user.name);
    console.log(arregloTotalFacts.all);
    actualizarFactContent();
}

//Funciones que actualizan el HTML
function actualizarFactContent(){
    document.getElementById("factContent").innerHTML = arregloTotalFacts.all[i].text;
    document.getElementById("user").innerHTML = arregloTotalFacts.all[i].user.name.first;

}


// var arregloHechosNuevos =[];
// function Hecho( nombre, hecho){
//     this.nombre = nombre;
//     this.hecho = hecho;
// }

// Hecho.prototype.setHecho = function( hecho ) {
//     this.hecho = hecho;
// }
// Hecho.prototype.setName = function( name ) {
//     this.name = name;
// }

// function agregarFactArray(nombre, hecho){
//     var nuevoF = new Hecho();
//     nuevoF.setHecho(hecho);
//     nuevoF.setName(nombre);
//     alert("Hecho: "+ nuevoF.hecho);
//     alert("Nombre: " + nuevoF.nombre);  
// }


// //Funcion de agregar fact con botón
//     function addFact(){
    
//         var n = document.getElementById("agregarHecho").value;
//         var f = document.getElementById("agregarNombre").value;
//         agregarFactArray(n, f);
//     }
    
//Funcion para asignar foto random de fondo
    function cargarImagen(){ 
        let i= numeroAleatorio(0,17);
        contenedor= document.getElementById("content"); 
        //let string= "img/" + numeroAleatorio(1,10)+ ".jpg";
        //contenedor.style.backgroundImage= "url("+string+")";
        contenedor.style.backgroundImage= "url(" +arregloTotalFotos[i]+ ")"; 
        contenedor.style.backgroundRepeat= "no-repeat";
        contenedor.style.backgroundSize= "900px 500px";
    }



//Funciones varias, de numeros aleatorios
    function getRandom(){
            return Math.floor(Math.random() * 205);
        }

    function numeroAleatorio(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }