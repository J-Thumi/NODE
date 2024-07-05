const { MongoClient } = require('mongodb');


let dbConection
module.exports={
    conectToDb: (cb)=>{
        MongoClient.connect("mongodb://localhost:27017/Bookstore")
        .then((client)=>{
            dbConection=client.db()
            return cb()
        })
        .catch((err)=>{
            console.log(err)
            return cb(err)
        })
    },
    getDb: ()=> dbConection
}