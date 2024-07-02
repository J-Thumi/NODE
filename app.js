const express=require('express')


//express app
const app =express()


//app listen
app.listen(3000)


// The res.send function is used within Express route handlers to send a response back to the client.
// it automaticaly sets content type header
//it also infers status code


//   app.get('/',(req,res)=>{
//     res.send('<p>This is app.js running</p>')
// })
  

 //the bove is just returning raw html 
 //the best practice is to return html file we can do so using
 //res.sendFile('./views/about.html',{root:__dirname})
 //the sendFile takes two parameters the first is the reative path of the file and the second is where is it relative to i.e assuming the pointer is where at the moment

 app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})

 app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname})
})

//redirection in express
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

//404 error
//it should be the last since node has passed thru all the rest and the route needed is not available so the code below runs
//this means that even if there are matching routes the first is always that runs
app.use((req,res)=>{
res.status(404).sendFile('./views/404.html',{root:__dirname})
})

// the above is the simplified form of the server .js