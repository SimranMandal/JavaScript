function greeting(name){
    console.log(`Hello ${name}`)
}

function getUseerInput(callback){
    var name = prompt(`Please enter your name : `);
    callback(name);
}

getUseerInput(greeting);