const express=require('express')
const app=express()
app.use(express.json())//for post requests to get body of the request
const { ObjectId } = require('mongodb')
//import the two functions in the db file
const {connectToDb,getDb} = require('./db')
let db


                //BODY OF THE IMPORTED FUNCTIONS
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



                //GET REQUEST FOR SEVERAL BOOKS
app.get('/books',(req,res)=>{
    //PAGINATION
    // if there are any query parameters this is how to handle them
    //the parameter is named p in the query 
    //if user does not specify the page add || 0 
    const page=req.query.p || 0
    const booksPerPage=4

    //create an empty array where each book will be added to 
    let books=[]
//in mongo console to get specific collection : db.Books
    //here we use the collection method
    db.collection('Books')
    .find()
    .sort({author:1})

    // for pagination you can use skip and limit methods
    .skip(booksPerPage * page)
    .limit(booksPerPage)
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




                //GET REQUEST FOR A SINGLE BOOK

//we want a specific book
app.get('/books/:id',(req,res)=>{//if the path is changable use colon

    if (ObjectId.isValid(req.params.id)){//check if the id input is valid

        db.collection('Books')
    .findOne({_id:new ObjectId(req.params.id)})//comes from mongo so you must require it 
    //always remember the new keyword
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(500).json({error:'could not fetch the document'})
    })
    }
    else{
        res.status(500).json({error:'Invalid id'})
    }
   
    
})




//instead of sending the data from the database to the browser we can send it to postman

//using post man 1. specify the method
               //2. input the link i.e http://localhost:3000/
               //3.send if a get request
               //4. if a post request input the body of the object you want to input




               //POST REQUEST
//all the above are for get request lets try post requests 

app.post('/books',(req,res)=>{
//the request is coming with the body of what you want to add
//we use the request.body property which we cant use untill via a middleware provided by express
//we need to import it : app.use(express.json())

const book=req.body//get the body of the book entered

db.collection('Books')//to add the body of the book
.insertOne(book)//its async hence .then
.then(result=>{
    res.status(201).json(result)
})
.catch((err)=>{
    res.status(500).json({error:'could not add a new document'})
})
})





            //DELETE REQUEST
 app.delete('/books/:id',(req,res)=>{//if the path is changable use colon

    if (ObjectId.isValid(req.params.id)){//check if the id input is valid

        db.collection('Books')
    .deleteOne({_id: new ObjectId(req.params.id)})//comes from mongo so you must require it 
    //always remember the new keyword
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(500).json({error:'could not delete the document'})
    })
    }
    else{
        res.status(500).json({error:'Invalid id'})
    }
   
    
})                  

  

                //PATCH REQUEST
app.patch('/Books/:id',(req,res)=>{
    const updates=req.body


    if(ObjectId.isValid(req.params.id)){
        db.collection('Books')
        .updateOne({_id:new ObjectId(req.params.id)},{$set: updates})
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json({error:'cannot update the book'})
        })
    }
    else{
        res.status(500).json({error:'invalid id'})
    }
})

   
//The above rep the CRUD operations 
//create with post method,read with get method,update with patch method,delete with the delete




// Pagination is a technique used to divide large datasets into smaller, manageable chunks (pages) to make data retrieval and display more efficient. In web applications, it helps improve performance and user experience by loading only a subset of data at a time.

                    //WEB QUERIES AS THEY ARE IN THE BROWSER
// Web queries, as they appear in the browser, are often in the form of URLs with query parameters. These parameters are used to pass data between the client and the server. They are typically appended to the URL after a question mark (?), with each parameter consisting of a key-value pair separated by an equals sign (=). Multiple parameters are separated by an ampersand (&).

// Structure of a Web Query
// The general structure of a URL with query parameters is as follows:
// https://example.com/path?param1=value1&param2=value2
// Examples

// Simple Query:
// https://example.com/search?q=web+development
// Base URL: https://example.com/search
// Query Parameter: q
// Value: web development

// Multiple Parameters:
// https://example.com/products?category=electronics&sort=price&order=asc
// Base URL: https://example.com/products
// Query Parameters:
// category: electronics
// sort: price
// order: asc
// Encoded Parameters:

// If the value contains special characters (e.g., spaces, symbols), it should be URL-encoded:
// https://example.com/search?q=machine%20learning
// Value: machine learning (encoded as machine%20learning)
    

    
  