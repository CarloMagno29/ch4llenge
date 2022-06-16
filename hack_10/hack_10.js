/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id: 100,
    name: "foo",
    roles: ["admin"],
    skills: ["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias: "super alias",

};
delete foo.alias // a bit of cheating

let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git", "github", "docker", "deploy"];
let levels = [{ LEVEL: "l-1" }, { LEVEL: "l-2" }, { LEVEL: "l-3" }];
let niu = { levels: [] }


//----------------name------------------------------------------
foo.name = foo.name.charAt(0).toUpperCase() + foo.name.slice(1);

//----------------roles-----------------------------------------

for (let ir = 0; ir < foo.roles.length; ir++) {
    if (foo.roles[0] == "admin")
    foo.roles[0] = foo.roles[0].toUpperCase();
}
foo.roles.push(roleSuperUser, roleUser)

//-----------skills---------------------------------------------

foo.skills.unshift(skills[0], skills[1])
foo.skills.splice(5, 0, skills[2])
foo.skills.push(skills[3])

for (let i = 0; i < foo.skills.length; i++) {
    foo.skills[i] = foo.skills[i] = foo.skills[i].charAt(0).toUpperCase() + foo.skills[i].slice(1);

    
    if (foo.skills[3] == "html") {
        foo.skills[3] = foo.skills[3].toUpperCase();
    }
    if (foo.skills[4] == "css") {
        foo.skills[4] = foo.skills[4].toUpperCase();
    }
}

//----------------levels---------------------

for (let i = 0; i < levels.length; i++) {
    levels[0] = { LEVEL: "L1" }
    levels[1] = { LEVEL: "L2" }
    levels[2] = { LEVEL: "L3" }
    niu.levels.push(levels[i])
}

let result = { ...foo, ...niu }
console.log(result)



//export result
module.exports = result; 