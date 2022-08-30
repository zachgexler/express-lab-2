require("express");

console.log(require("express"))

const express = require("express");

const app = express();

//define routes

app.get("/", (req, res) => {
  res.send("ZACH GEXLER")
})

app.get("/greeting", (req, res) => {
    res.send("Hello Stranger")
  })

//Greeting
//http://localhost:3000/greeting/Zach
app.get("/greeting/:name", function(req, res){
    res.send("What's Up " + req.params.name);
  })

// //Tip Calculator
// //http://localhost:3000/tip/100/20
app.get("/tip/:total/:tipPercentage", function (req, res) {

    res.send("Your Recommended Tip " + req.params["total", "tipPercentage"]
    )
})

//Magic 8 Ball
//http://localhost:3000/magic/Will%20I%20Be%20A%20Millionaire/indexOfSayingsArray
const sayings = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
app.get("/magic/Will%20I%20Be%20A%20Millionaire/:indexOfSayingsArray", function (req, res) {

    res.send("Magic 8 Ball Says " + (sayings[3]))
})
// h1(sayings[3]); tried multiple ways to add h1 tag around the req

app.listen(3000, function () {
    console.log("express is listening for requests from the browser")
})