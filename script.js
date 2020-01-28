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
readAPIcats().then(traerDatosFacts);


var fact;

function primerFact(){
    fact=arregloTotal[0];
    console.log(fact)
}

readAPIcats().then(primerFact);


