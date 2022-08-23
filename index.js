var express = require('express');
var request = require('request');
var app = express();
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('search')
});

app.get('/result', function(req, res){ 
   var title = req.query.search;
   var url = 'http://www.omdbapi.com/?s='+ title +'&apikey=c4e87272&limit=100';
    // console.log(title);
   request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            var parsedData = JSON.parse(body);
            res.render('index', {parsedData:parsedData, });
        };
        
   });
})

app.listen(3000, function(){
    console.log('it is running');
})