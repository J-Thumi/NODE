const express=require('express')
const app=express()
//import the two functions in the db file
const {connectToDb,getDb} = require('./db')
let db
connectToDb((err)=>{//this is the cb function 
//if an error occurs there is an error as the argument
if(!err){//if no error encountered there is no error as an arg
    //since the connection is successfull we can start listening to requests
    app.listen(3000,()=>{
        console.log('listening to port 3000')
    })
//we can write a function in the listen as 2nd parameter to know if we are listening to the port the function is not a must

//since we have now connected to the db lets get the data in the db and assign a variable to it
db=getDb()
}})
app.get('/Books',(req,res)=>{
    //create an empty array where each book will be added to 
    let books=[]
//in mongo console to get specific collection : db.Books
    //here we use the collection method
    db.collection('Books')
    .find()
    .sort({author:1})
    .forEach((book)=>{
        books.push(book)
    })//this is an ansyc function
    .then(()=>{
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error:'could not fetch the docs'})
    })
    //here the find method does not return the whole collection it returns the cursor object
    // The find() method in the MongoDB driver for Node.js is used to query documents in a collection. This method is similar to SQL's SELECT statement and is used to retrieve multiple documents that match a specified query. The find() method returns a cursor, which can be iterated to access the documents.

    //forEach method iteriates eacha at a time and allows us to deal with them individually
    //toArray puts all docs in an array



})


//if a function is on a single line 
//const data=book=>books.push(book)