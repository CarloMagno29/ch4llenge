/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* en donde se representan la clave y el valor
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};



result.name= result.name.charAt(0).toUpperCase() + result.name.slice(1);
result.role= result.role.toLocaleUpperCase()
console.log(result)

  /*let claves = Object.keys(foo); 
    for(let i=0; i< claves.length; i++){
  let clave = claves[i];
  if(result[clave] == "foo"){
    result[clave] = result[clave].charAt(0).toUpperCase() + result[clave].slice(1);
  
}
if(result[clave] == "admin"){
    result[clave] = result[clave].toUpperCase()
   
}
result.push(foo[clave])
    }
   
    console.log(result)*/


//export result
module.exports = result; 