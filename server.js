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




app.listen(3000, () => {
    console.log('Server is running on port 3000');          
});