// var MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp1',(err,db)=>{
if(err){
    return console.log("Unable to connect to MongoDB");
}console.log("Connected Succesful");
// db.collection('Todos').insertOne({
//     text:'Someting to do',
//     completed: false
// },(err,result)=>{
// if(err){
//     return console.log('unable to insert todo');
// }console.log(JSON.stringify(result.ops,undefined,2));
// });
db.collection('Users').insertOne({
    name:'Suresh Goud',
    age: 25,
    location: 'Podichedu'
},(err,result)=>{
if(err){
    return console.log('unable to insert todo');
}console.log(result.ops);
});

db.close();
});