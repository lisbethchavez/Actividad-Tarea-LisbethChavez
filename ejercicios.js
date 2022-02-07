
//Se tiene la siguiente matriz: [['Esmeraldas','28C'],['Guayaquil','26C'],['Quito','18C']];
// se pide diseñar la funcion para convertir la matriz en un objeto 
// resultado esperado: 
/* 
{
    'Esmeraldas':'28C',
    'Guayaquil': '26C',
    'Quito': 18C,
}
*/
//Utilice reduce, - (ac,va,index,array)

const matriz = [['Esmeraldas','28C'],['Guayaquil','26C'],['Quito','18C']];

function matrizobjeto(array) {
    return array.reduce((ac, va) => {
            let key = va[0];
            let value = va[1];
            ac[key] = value;
            return ac;
        },
        {}
    );
}
  
console.log(matrizobjeto(matriz));
/* 
//Solución profesor 
function obj(array){
    return array.reduce((ac,va,index,array)=>{
        ac[va[0]] = va[1];
        console.log(ac);
        return ac;
    },{});
}
console.log(obj(matrizobjeto));
*/

//Se tiene el siguiente vector = ["A","B","C","D","E"]
//se pide diseñar la funcion shiftRight (desplazamiento a la derecha)
//que permite retornar el resultado siguiente:
//["E","A","B","C","D"]
//utilizar map(element,index,array)

const vector=["A","B","C","D","E"];

function shifttoRight(array){
    return array.map((element,index,array02)=>{
        derecha = index++; matriz = array02[5];
        for(element=derecha-2;element=0;element--){
            array02[element+1]=array02[element];
        } array02[-1];
    })     
}
console.log(shifttoRight(vector));





