const express = require('express')

const app = express()

app.set('view engine', 'ejs');
app.use(express.static('./public/assets'))
app.set('views', './public/views');

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/builds', (req, res)=>{
    res.render('builds');
});

app.get('/downloads/builds/release/', (req, res)=>{
    res.download('./files/builds/release.zip')
});


app.listen(7528, ()=>{
    console.log("SkyAura Website version: " + " Is now running on port 7528!")
})