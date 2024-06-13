const greet=(name)=>{
    console.log(`Hello ${name}`)
}
greet('Jos')


// console.log(global)

const sec=setInterval(()=>{
    console.log("Running after every one second")
},1000)

setTimeout(() => {
    console.log("shown after 5 seconds and the setInterval is over")
    clearInterval(sec)
}, 5000);

// the code above is asynchronous so the code below runs first

//to get complete directory of where the file we are working on is
console.log(__dirname)

//to get complete directory of where the file we are working on is and the file in the path
console.log(__filename)


//we can run a file in another file using require('path')
//const a = require('./pple')

//the value of a will be what was exported from pple file
//if people was not manually exported it would return an empty object
//console.log(a)
//console.log(a.people)
//console.log(a.ages)

//we can also distructure on importation
//to import people only
//const {people}=require('./pple')
//console.log(people)


//we can also distructure for both ages and people
const {people,ages}=require('./pple')
console.log(people)
console.log(ages)


//we can also export other modules pre def in node
const os =require('os')
console.log(os.platform())
console.log(os.homedir())