const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log(`req.cookies: ${JSON.stringify(req.cookies)}`);
    res.render('form', {cookies: req.cookies});
});

app.post('/addCookie', (req, res) => {
    const {key, value} = req.body;
    if (key && value) {
        res.cookie(`${key}`, value);
    }
    res.redirect('back');
});

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});