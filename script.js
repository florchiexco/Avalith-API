//Variables utilizadas a lo largo del código

var arregloTotalFacts, contenedor,  arregloTotalFotos, array;

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
            this.setStorageInicial();
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

function setStorageInicial(){
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

//Funcion de agregar fact con botón
var arregloHechosNuevos =[];
function newFact(fact, name){
    this.fact = fact;
    this.name = name;
}

function addFact(){
    const fact = document.getElementById("agregarHecho").value;
    const name = document.getElementById("agregarName").value;
    var nuevoHecho={
        nombre :name,
        hecho : fact
    }
    arregloHechosNuevos.push(nuevoHecho);
    1
    localStorage.setItem('usersDatos', JSON.stringify(arregloHechosNuevos));
    var guardado = localStorage.getItem('usersDatos');

console.log('objetoObtenido: ', JSON.parse(guardado));
}

    
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