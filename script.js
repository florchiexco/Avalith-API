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
console.error("No se encuentra el archivo json");
    console.log(e);
  });

 
//Primer funcion llamada

var arregloTotalFacts;


window.onload = function(){
    this.cargarImagen();
    readAPIcats().then((data) => {
        arregloTotalFacts = data;
        inicio();
    })
}

function getRandom(){
    return Math.floor(Math.random() * 205);
}
function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
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

var arregloHechosNuevos =[];

function Hecho( nombre, hecho){
    this.nombre = nombre;
    this.hecho = hecho;
}

Hecho.prototype.setHecho = function( hecho ) {
    this.hecho = hecho;
}
Hecho.prototype.setName = function( name ) {
    this.name = name;
}

function agregarFactArray(nombre, hecho){
    var nuevoF = new Hecho();
    nuevoF.setHecho(hecho);
    nuevoF.setName(nombre);
    alert("Hecho: "+ nuevoF.hecho);
    alert("Nombre: " + nuevoF.nombre);
   /* arregloHechosNuevos.push(nuevoF);
    alert("nombre: "+ nuevoF.nombre);
    
    alert("Arreglo nuevo: " + arregloHechosNuevos[0]);
     */       
}


//Funcion de agregar fact con botón
function addFact(){

    var n = document.getElementById("agregarHecho").value;
    var f = document.getElementById("agregarNombre").value;
    agregarFactArray(n, f);
    //alert(document.getElementById("agregarHecho").value);

//Funcion para asignar foto random de fondo
var contenedor;
function cargarImagen(){ 
        contenedor= document.getElementById("content"); 
        let string= "img/" + numeroAleatorio(1,10)+ ".jpg";
        contenedor.style.backgroundImage= "url("+string+")";
        contenedor.style.backgroundRepeat= "no-repeat";
        contenedor.style.backgroundSize= "900px 500px";
}