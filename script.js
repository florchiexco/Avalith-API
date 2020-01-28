async function readJSONcuentas(){
    try{
        var response= await fetch("data/cuentas.json");
        var data = await response.json();
        return data;
    }
    catch(error){
        throw(error);
    }
}