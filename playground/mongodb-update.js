// var MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp1',(err,db)=>{
if(err){
    return console.log("Unable to connect to MongoDB");
}console.log("Connected Succesful");

// db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a972f16e05e612ff4d60ab6')
// },{
//     $set:{
//        completed:true 
//     }
// },{
//     returnOriginal: false
// }
// ).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a9716a3418c1d261cf88701')
},{
    $set:{
       name:'Goud Sab' 
    },
    $inc:{
        age: 1
    }
},{
    returnOriginal: false
}
).then((result)=>{
    console.log(result);
});


});