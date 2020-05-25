/*For this exercise we will be building a simple application where 
we will store a shopping list. You should use an array to store your 
items in the shopping list.
Our application should have the following routes:
1. GET /items - this should respond with a list of shopping items. 
2. POST /items - this route should accept form data and add it to 
the shopping list. 
3. GET /items/:id - this route should display a single item's name 
and price 
4. PATCH /items/:id - this route should accept edits to existing 
items. 
5. DELETE /items/:id - this route should allow you to delete a 
specific item from the array.

*/
const express = require('express');

const router = express.Router();

const itemsList = [];
var id = 1;

router.get("/items", function(req, res){
    return res.json(itemsList);
});

router.post("/items", function(req, res){
    itemsList.push({
     name: req.body.name,
     price: req.body.price,
     id: ++id
    });
    return res.json({message: "ItemsList was added successfully."});
});

router.get("/items/:id", function(req, res){
  const items = itemsList.find(item => item.id === Number(req.params.id));
  return res.json(items);
});

router.patch("/items/:id", function(req, res){
  const items = itemsList.find(item => item.id === Number(req.params.id));
  items.name = req.body.name;
  return res.json({ message: "ItemsList was updated successfully."});
})

router.delete("/items/:id", function(req, res){
  const items = itemsList.find(item => item.id === Number(req.params.id));
  items.splice(itemsIndex, 1);
  return res.json({ message: "ItemsList was deleted successfully."});
});


module.exports = router;