require("express");

console.log(require("express"))

const express = require("express");

const app = express();

//define routes

// app.get("/", (req, res) => {
//   res.send("ZACH GEXLER")
// })

// app.get("/greeting", (req, res) => {
//     res.send("Hello Stranger")
//   })


app.get("/greeting/:name", function(req, res){
    res.send("What's Up " + req.params.name);
  })

app.listen(3000, function(){
    console.log("express is listening for requests from the browser")
})


