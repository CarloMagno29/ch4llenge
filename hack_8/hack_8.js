/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];



let niu = Object.entries(foo)

for(let i = 0; i<niu.length;i++){
  result.push(niu[i])
}
console.log(result)

/*let keys = Object.keys(foo)
let values = Object.values(foo)

for (let i=0; i<keys.length; i++){
  result.push(keys[i], foo[keys[i]])
} 
console.log(result)*/

//export result
module.exports = result; 