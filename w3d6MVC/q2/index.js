const express = require('express');
const path = require("path");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/result', (req, res) => {
    const {name, age} = req.body;
    res.render("result", {
        name: name ? name : "person",
        age: age ? `You are ${age} years old!` : ""
    });
});

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});