const express=require('express')
const app=express()
const morgan=require('morgan')
//register the view engine
//EJS (Embedded JavaScript): A popular templating engine with support for embedding JavaScript code within templates.

//express will automatically look forthe templates in the views folder but if you want to create another folder you can let it know how you have named it by doing the following:

// app.set('views','folderName')

//the templates are just regular html code but the file extenssion is ejs
app.set('view engine','ejs')
app.listen(3000)

            //creating my own middleware
// app.use((req,res,next)=>{
// console.log('new request')
// console.log('host',req.hostname)
// console.log('path',req.path)
// console.log('method',req.method)
// next()
// })

//when running the code with the above code the browser hangs since it dont know what to do next because the request was satisfied 
//though not the request we wanted the since we wanted a / or /about but is when running it hits a app.use() the code in it is the one exequted
//to avoid this we will use next()
//pass next as aparameter in the function in the app.use((req,res,next)=>{}) and call it in the body of the function


        //using third party middleware
        //some are available in morgan 
        //npm install morgan
        //then require it after express was requred
        //to use the middleware
        app.use(morgan('dev'))
//middleware and static

app.use(express.static('public'))//any file in public folder will be accessible in all files


//rendering a view
//name of view minus extenssion
app.get('/',(req,res)=>{
    const blogs=[
        {title:"mark",snippet:"the templates are just regular html code but the file extenssion is ejs"},
        {title:"john",snippet:"the templates are just regular html code but the file extenssion is ejs"},
        {title:"jane",snippet:"the templates are just regular html code but the file extenssion is ejs"},
        {title:"eli",snippet:"the templates are just regular html code but the file extenssion is ejs"},
    ]
    res.render('index',{title:'Home',blogs})//we can add dynamic data here also
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})
app.get('/blog/create',(req,res)=>{
    res.render('create',{title:'create blog'})
})


//for redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about')
// })



//Mongodb

const {conectToDb, getDb} = require('./db')
app.get('/books',(req,res)=>{
    res.json({msg:'hello'})
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})