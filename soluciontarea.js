
//1.Verificar si una de las cadenas de caracteres del array
//tiene mas de 10 caracteres

const vectorcadenas=["Ecuador","Argentina","Dinamarca","Corea del Norte"];

function cadenaMayorq10(array){
    return array.some(item=>item.length > 10);
}

console.log(cadenaMayorq10(vectorcadenas));

//2.chequear si uno de los elementos de la matriz es true

const vectorBooleano=[[false,false,false],[false,false,false],[false,false,true]];

function existTrue(array){
    return array.some(element =>{
        return element.some(item=> item==true);
    })
}
console.log("Array de Booleanos: ");
console.log(existTrue(vectorBooleano));

//3.verificar si la palabra lost existe dentro del siguiente array
const matrizParrafo=[
    "Strange is the night black stars rise",
    "And strange moons circle through the skies", 
    "But stranger still is",  
    "Lost Carcacosa"];

    function existLost(matriz){
        const palabra="Lost";
        return matriz.some(element =>{
            return data.indexOf(palabra)!=-1;
        })
    }

    console.log("Existe palabra Lost: ");
    console.log(existLost(matrizParrafo));





