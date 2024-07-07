const { MongoClient } = require('mongodb');

//use let not const to def the db connection since it will change 
let dbConection
const uri ='mongodb+srv://josphatthumi:<password>@cluster0.bqncmmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' //the connection string fron atlas
//we are not using the dbconnection here so it must be exported
//we are exporting 2 functions so they should be in object syntax
module.exports={
    //the connectToDb function takes another function as an arg which is to run after the connection is established
    connectToDb: (cb)=>{//this function connects to the database
        //mongodb://localhost:27017/dbName
        MongoClient.connect(uri)//connect to the database
        //it is an asyc fuct so use promises

        .then((client)=>{//when we connect to the database successfully we get a value as an arguement
            //in the client created there is a method called db()
            dbConection=client.db()//creates an interface in which we can interact with the database and assign a variable to it
            return cb()//run the func passed as an arg after the connection
        })
        //there may be errors
        .catch((err)=>{//if we encounter an error when connecting to the db we get an err as an arg
            console.log(err)
            return cb(err)//the function is also retured if an error occurs and it takes the err as an arg
        })
    },
    //the second object has a key of getDb and the value is a fnction returning the dbConnection
    //the 2nd function gets what is in the database
    getDb: ()=> dbConection
}