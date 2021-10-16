const express = require('express');
const app = express();
app.get('/', (req, res) => {
 let name = req.query.name;
 let age = req.query.age;
 if (!name) {
 name = "person";
 }
 if (!age) {
    age = "age";
    }
 res.send(`Welcome ${name}. You are ${age} years old`);
});
app.listen(3000);