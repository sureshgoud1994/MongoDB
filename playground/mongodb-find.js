// var MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp1',(err,db)=>{
if(err){
    return console.log("Unable to connect to MongoDB");
}console.log("Connected Succesful");
// db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('unable to retrieve documents');
// })

// db.collection('Todos').find({_id:new ObjectID('5a97159a3e95052f74953b52')}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
//     },(err)=>{
//         console.log('unable to retrieve documents');
//     })

// db.collection('Todos').find().count().then((docs)=>{
//     console.log('Todos : ' + docs);
//     },(err)=>{
//         console.log('unable to retrieve count');
//     })

// db.collection('Users').find({name:'Suresh'}).toArray().then((doc)=>{
//     console.log(doc);
// },(err)=>{
// console.log('Unable to retirve users info');
// });

db.collection('Users').find({name:'Suresh'}).count().then((doc)=>{
    console.log(doc);
},(err)=>{
console.log('Unable to retirve users info');
});

// db.close();
});