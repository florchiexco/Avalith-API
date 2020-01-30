
//Funciones para leer la API
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
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

 
//Primer funcion llamada
var arregloTotalFacts;

window.onload = function(){
    if(localStorage.length!= 0){
    readAPIcats().then((data) => {
        arregloTotalFacts = data;
        localStorage.setItem('apiDatos', JSON.stringify(this.arregloTotalFacts));
        inicio();
    })
}else{
    inicio();
}
}

//LocalStorage
var datosLocalStorage = localStorage.getItem('apiDatos');
localStorage.setItem('apiDatos', JSON.stringify(datosLocalStorage));
console.log(datosLocalStorage);


//Mostrar fact random
function getRandom(){
    return Math.floor(Math.random() * 205);
}

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
      
    var nuevoHecho = new newFact(fact, name);
  
    arregloHechosNuevos.push(nuevoHecho);
    
}



