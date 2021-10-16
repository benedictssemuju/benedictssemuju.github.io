const express = require('express');
const path = require("path");

const app = express();
app.use(express.urlencoded({extended: false}));
app.set('port', process.env.PORT || 3000);
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${cssFile}">
        </head>
        <body>
            <form action="/result" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <label for="age">Age</label>
                <input type="text" name="age" id="age">
                <input type="submit" value="Submit Query">
            </form>
        </body>
        </html>`
    );
});

app.get('/output', (req, res) => {
    const {name, age} = req.query;
    const response = `Welcome ${name ? name : "person"}. ${age ? `You are ${age} years old!` : ""}`;
    res.send(response);
})

app.post('/result', (req, res) => {
    const {name, age} = req.body;
    res.redirect(303, `/output?name=${name}&age=${age}`);
})

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});