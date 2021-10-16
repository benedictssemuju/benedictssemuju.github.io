const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
app.set('port', process.env.PORT || 3200);

app.get('/', (req, res) => {
    res.send('<form action="/result" method="POST"> ' +
        '<label for="name">Name</label> ' +
        '<input type="text" id="name" name="name"> ' +
        '<label for="age">Age</label> ' +
        '<input type="text" name="age" id="age"> ' +
        '<input type="submit" value="Submit Query"> ' +
        '</form>');
});

app.post('/result', (req, res) => {
    
    const {name, age} = req.body;
    const response = `Welcome ${name ? name : "person"}. ${age ? `You are ${age} years old!` : ""}`;
    res.send(response);
});

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});