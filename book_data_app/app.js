var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.get("/", function(req, res){
   res.render("search"); 
});

app.get("/bookdb", function(req, res){
      var query = req.query.search;
      var url = "https://www.googleapis.com/books/v1/volumes?q=" + query;
request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
             var data = JSON.parse(body);
            res.render("bookdb", {data: data})
            console.log
        }
    })
});

app.listen(process.env.PORT,  process.env.IP,function(){
    console.log("Booklist is here!!!");
});
// using google books api(they have only 10 results to show)