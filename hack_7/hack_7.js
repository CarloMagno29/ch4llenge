/**
* agregar los skills del objeto foo al array result, 
* mediante la funcion map 
*
* output => ["javascript", "html", "css", "python", "flask", "react", "redux"]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"]
};
let result= [];

let niu = Object.values(foo.skills)

niu.map(function(habilidades){
    return result.push(habilidades)
})
console.log(result)

//result.push(Object.values(foo.skills))




//export result
module.exports = result; 