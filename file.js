const fs = require('fs')

//reading files
//takes 2 parameters path and a function to say what to be done i.e incase of an error and incase file in none empty
fs.readFile('./test.txt' , (err,data)=>{
    if(err){
        console.log(err)
    }

    //if you just print out the data we get a buffer
    //console.log(data)
    console.log(data.toString())
})

//reading a file is asynchronous hence takessome time to run this means the code bellow runs first then the function in the 
//readFile runs




//writing files
//replaces current content of the file
//takes 3 args path,what to be written and function
fs.writeFile('./write.txt','This file was writen from a js code',()=>{
    console.log("file was written")
})
fs.readFile('./write.txt',(err,data)=>{
    console.log(data.toString())
})

//if the file to be writen on does not exist itis just created