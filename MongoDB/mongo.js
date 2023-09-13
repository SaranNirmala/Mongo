//  Show all the Database
// 1 .show dbs

// Use db

// Insert a new a data into the document
db.employee.insertOne({});

//  Insert a many data into the document
db.employee.insertMany([{}, {}, {}, {}, {}, {}]);

db.employee.insertMany ([{name :"Ravin", details : {position :"Frontend Developer", Salary : 60000 }},
{name :"Saranya", details : {position :"Frontend Developer", Salary : 40000 }},
{name :"Ruthra", details : {position :"Fullstack Developer", Salary : 70000 }},
{name :"Shiva", details : {position :"Fullstack Developer", Salary : 80000 }}])

//  find the signle data in the document
db.employee.findOne();

//  Find all the information about each products
db.employee.find();

//  we can filter the items by using the arguments
db.employee.find({"details.position":"frontend Developer"});

//  Update the single data
db.employee.updateOne({name:"Ruthra"}, {$set:{"details.Salary" : 80000}});

// Using INc - update
db.employee.updateOne({name:"Ruthra"}, {$inc: {"details.Salary" : 20000}});
// 80000+20000
 
// update Many
db.employee.updateMany({"details.position":"Frontend Developer"}, {$set:{"details.Salary" : 80000}});


//  DeleteOne

db.employee.deleteOne({name :"Shiva"})

// DeleteMany

db.employee.deleteMany({"details.position":"Frontend Developer"});




//  Create the new Collection 

db.createCollection("Product", { })    
// (Product - Collection Name)  
// db.createCollection("Product", {size : 54855562})  
// We can fix the Size - the collection should be within the size 
//db.createCollection("Product", {Max : 5000})  - we can store only 5000 documents
// db.createCollection("Product", {storageEngine : {wiredTiger:{}}})  - data can be accessed with the help of storageEngine

//Find the product price which are between 400 to 800
db.Product.find({ product_price:{$lt: 800, $gt: 400}});

// Cursor 

//  db.employee.find() - it gives 20 documents only.  if we want to display full results in the terminal we can use
db.employee.find().toArray();

//  Using foreach
db.employee.find().array.forEach((data) => print(data)); 

// Projection 
db.employee.find({} , {name:1})  // Showing name and ID 

db.employee.find({} , {name:1, _id:0}) // Showing only name 
db.employee.find({} , {name:1, _id:0, is_employee:"FullTime"}) // WE can set default value for all documents
db.employee.find().limit(5);            // It shows 5 doc
db.employee.find().skip(4)           // It avoids first 4 documents
db.employee.find().sort({name : 1  })  // Display acending order
db.employee.find().sort({name : -1  })  // Display decending order

//  Query Operators - Comparison Operators

db.employee.find({email :{ $eq: "msaranyanirmala@gmail.com"}})  
db.employee.find({email :{ $ne: "msaranyanirmala@gmail.com"}})  
db.employee.find({Salary :{ $gt: 40000}})  
db.employee.find({Salary :{ $lt: 40000}})   
db.employee.find({Salary :{ $gte: 40000}})  
db.employee.find({Salary :{ $lte: 40000}})   
db.employee.find ({age : { $in :[20,24,28]}})  
db.employee.find ({age : { $nin :[20,24,28]}})      
// Logical Operators
db.employee.find({ $and :[{email : { $eq :  "test@example.com"}}, {password : { $eq : "password" }}]}) ;
db.employee.find({ $or :[{email : { $eq :  "test@example.com"}}, {userName : { $eq : "Ravin" }}]}) ;
// $nor - Return the documents where both queries fail to match
db.inventory.find( { $nor: [ { price: 1.99 }, { qty: { $lt: 20 } }, { sale: true } ] } )
// The price value doesn't eq to 1.99 , lt 20, Sale not true


// $not - Returns the document where the query does not match
db.inventory.find( { price: { $not: { $gt: 1.99 } } } ) 
// The price value is less than 1.99 or equal to 1.99 or the price value field is does not exist
db.collection.find( { field: { $regex: 'Saranya', $options: 'i' } } );  // i- Case insensitive
db.collection.find( { field: { $regex: /acme.*corp/i, $nin: [ 'acmeblahcorp' ] } } );
db.collection.find( { field: { $regex: /R.*n/i, $nin: [ 'Ravin' ] } } );
db.collection.find({$where: function(){return this.name == "Saranya";}})  // Its not work for nested Document

// $text- performs text search on the contents
// $push- push the element to the the Array
// $pop - pop the element from the array (1 remove the last element)  , (-1 remove the first element)
// $exists - check if the element exists in the document
db.employee.find({age :{ $exist: true}})  
db.user.find({$expr : {$gt :["$debt", "$balance"]}})  // those who are having debt more than their balance


db.users.countDocuments({$age :{$gt : 25}})   // returns the count, those who are greater than 25

db.users.aggregate([{$match :{age : 25}}]);

db.users.aggregate([{$match :{age : 25}},{ $group :{_id : "$salary" , total :{$sum :1}}}]);


/*
{{"cheese" , } "baneer", }   CheeseQty-2, cpric=400
baneer-3  price =300
normal - 1    price -200
*/ 