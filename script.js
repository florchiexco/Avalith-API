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

async function readAPIcatsUser(){
    try{
        var response= await fetch("https://cat-fact.herokuapp.com/users");
        var data = await response.json();
        return data;
    }
    catch(error){
        throw(error);
    }
}

var arregloTotalFacts;
var fact;
function traerDatos(data){
    arregloTotalFacts=data;
    console.log("Arreglo: ", arregloTotalFacts);
    console.log(data.all);
  
}
readAPIcats().then(traerDatos);