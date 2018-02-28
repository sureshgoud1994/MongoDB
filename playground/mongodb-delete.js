// var MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp1',(err,db)=>{
if(err){
    return console.log("Unable to connect to MongoDB");
}console.log("Connected Succesful");
//Delete Many
// db.collection('Todos').deleteMany({text:'done eating'}).then((result)=>{
//     console.log(result);
// });

//Delete One
// db.collection('Todos').deleteOne({text:'test for find retriving doc'}).then((result)=>{
//     console.log(result);
// });

//find One and Delete
// db.collection('Todos').findOneAndDelete({text:'Someting to do'}).then((result)=>{
//     console.log(result);
// });

//Delete Many
// db.collection('Users').deleteMany({name:'Suresh'}).then((result)=>{
//     console.log(result);
// });

//find One and Delete
db.collection('Users').findOneAndDelete({_id:new ObjectID('5a9716f11bcaf9261c1a03bd')}).then((result)=>{
    console.log(result);
});

});