var express = require('express');
var app = express();

var data = require('./data/artists.json')

app.set('view engine','ejs') // This is setting the view engine to EJS
app.set ('views','views') // This gives access to our views folder

app.use(express.static('public')); // Access to public folder
app.use(require('./routes/index')); //Access to index page

app.get('/feedback',(req,res)=>{
    //Access data in Array
    var artistArray = data.artists
    //Sending to Feedback Page & Creating Artist var that we push into document
    res.render(('feedback'),{
        artists: artistArray
    })
})

app.listen(4500,()=>{
    console.log('Listening on port 4500');
})