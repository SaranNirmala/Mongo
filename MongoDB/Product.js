db.Product.find({"$or":[{"product_price":{$gt:600}},{"product_price":{$lt:400}} ]});

//4. List the four product which are grater than 500 in price 

db.Product.find({ product_price:{$gt: 500}});

//5. Find the product name and product material of each products
db.Product.find({},{product_name:1, product_material :1});

//6. Find the product with a row id of 10
db.Product.find({id : {$eq : "10"}});

//7.Find only the product name and product material
db.Product.find({},{product_name:1, product_material :1, _id:0});

// 8.Find all products which contain the value of soft in product material
db.Product.find({product_material : {$regex : "Soft"}});

//9. Find products which contain product color indigo  and product price 492.00
db.Product.find({"$and":[{"product_color":{$eq:"indigo"}},{"product_price":{$eq:492}} ]});

//10. DeleteOne Product price equal to 47
db.Product.deleteOne({product_price : 47});

//11. DeleteMany Product price equal to 38
db.Product.deleteOne({product_price : {$eq : 38}});



