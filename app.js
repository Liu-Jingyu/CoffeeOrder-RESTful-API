//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/CoffeeOrderDB",{useNewUrlParser:true});

const OrderSchema=new mongoose.Schema({
  name:String,
  number:Number,
  price:Number,
  hasStock:Boolean
});

const Order=  mongoose.model("order",OrderSchema);

//requret target an order
app.route("/orders")
.get(function(req,res){
  Order.find(function(err,foundOrders){
    if(!err){
      res.send(foundOrders);
    }
  });
})
.post(function(req,res){
  const newOrder = new Order({
    name :req.body.name,
    number:req.body.number,
    price:req.body.price,
    hasStock:req.body.Boolean
  });
  newOrder.save(function(err){
    if(!err){
      res.send("successfully send a new order");
    }else{
      res.send(err);
    }
  });
})
.delete(function(req,res){
  Order.deleteMany(function(err){
    if(!err){
      res.send("successfully delete an order");
    }else{
      res.send(err);
    }
  });
});


////requret target a specified order
app.route("/orders/:coffeeName")
.get(function(req,res){
    Order.findOne({name:req.params.coffeeName},function(err,foundOrder){
      if(foundOrder){
        res.send(foundOrder);
      }else{
        res.send(err);
      }
    });
  })
.put(function(req,res){
  Order.update(
    {name:req.params.coffeeName},//condition
    {name:req.body.name,
      number:req.body.number,
        price:req.body.price,
        hasStock:req.body.hasStock},
        {overwrite:true},
        function(err){
        if(!err){
            res.send("successfully update the corresponding order");
          }else{
            res.send(err);
          }
        });
      })
.patch(function(req,res){
  Order.update(
    {name:req.params.coffeeName},
    {$set:req.body},
    function(err){
      if(!err){
        res.send("successfully patch the corresponding order");
      }else{
        res.send(err);
      }
    });
})
.delete(function(req,res){
  Order.deleteOne(
    {title:req.params.coffeeName},
    function(err){
      if(!err){
        res.send("successfully delete the corresponding order");
      }else{
        res.send(err);
      }
    });
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
