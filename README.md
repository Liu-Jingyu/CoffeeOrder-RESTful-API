# CoffeeOrder-RESTful-API
CoffeeOrder-RESTful-API

Read Me
This is a localhost CoffeeShop RESTful API. I use MongoDB as a database. Other tools I use are Robo 3T and PostMan
Each order object has a name, a number, a price and a hasStock boolean, the database name is CoffeeOrderDB.

There are two different routes connecting to the server:
The first route is on localhost:3000/orders,targeting all the orders in the CoffeeOrderDB. 
It supports GET, POST and DELETE behaviors.

 GET : return all the orders in the CoffeeOrderDB
 POST:  add new order from the server to the CoffeeOrderDB
 DELETE: delete all the orders in the CoffeeOrderDB
 
 
The sencond one is on localhost:3000/orders/coffeeName (you can change the coffeeName to any order's name here),
targeting to a specific order by its name in the CoffeeOrderDB. 
It supports PUT, PATCH and DELETE behaviors.

 PUT: update all the properties of the corresponding order from the server and save the changes to the CoffeeOrderDB
 PATCH: can only update some specified properties of the corresponding order from the sever and save the changes to the CoffeeOrderDB
 DELETE: delete the corresponding order in the CoffeeOrderDB
