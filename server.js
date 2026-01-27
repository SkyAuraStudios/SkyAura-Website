const express = require('express');
const app = express();

const ejs = require('ejs');

app.set('view engine', 'ejs');

app.set('view engine', 'ejs');
app.use(express.static('./public/assets'))
app.set('views', './public/views');


app.get('/', (req, res) => {
    res.render('index');
});

app.use('/assets', express.static('./public/assets'));

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(7528, () => {
    console.log('SkyAura Website is running on port 7528\nAwaiting website requests...');
});