const express = require('express');
const router = express();

var data = require('../data/artists.json')

router.get('/',(req,res)=>{
    var artistArray = data.artists 
    // We get into the array by setting it as a variable

    res.render('index',{
        artists : artistArray
    // We pushed this into the ejs file by assigning OUR variable to RENDER variable
    })
})


module.exports = router;