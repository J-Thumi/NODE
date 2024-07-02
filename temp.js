const express=require('express')
const app=express()

//register the view engine
//EJS (Embedded JavaScript): A popular templating engine with support for embedding JavaScript code within templates.

//express will automatically look forthe templates in the views folder but if you want to create another folder you can let it know how you have named it by doing the following:

// app.set('views','folderName')

//the templates are just regular html code but the file extenssion is ejs
app.set('view engine','ejs')
app.listen(3000)

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

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})