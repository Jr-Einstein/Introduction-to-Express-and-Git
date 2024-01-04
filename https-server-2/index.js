const express = require('express')
const port = 3000
const app=express();


app.get("/route-handler", function(req,res) {
    
    res.json({
        name:"Aman",
        age:19
    })
})




app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port)
