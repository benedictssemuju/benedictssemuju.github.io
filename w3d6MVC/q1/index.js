const express = require('express');
const path = require("path");
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.render('index', {
        time: date.toTimeString(),
        cssFile
    });
});

const port = app.get('port');
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});