const mongoClient = require('mongodb').MongoClient

mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
.then(conn => global.conn = conn.db("myApp"))
.catch(err => console.log(err))


function findAll(){
    return global.conn.collection("customers").find().toArray()
}

module.exports = { findAll }