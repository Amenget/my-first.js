var express = require("express");
var app = express();
app.set("view engine", "pug");
app.set("views","./views");
app.use(express.static('public'));

app.get("/first_template", function(req, res){
   res.render("first-view");
});
app.get("/about-page", function(req, res){
    res.render("about-page");
 });
 
 app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "You Tube", 
      url:"http://www.youtube.com"
   });
});
app.get('/components', function(req, res){
   res.render('content');
});

app.listen(3000);