    const express= require("express");
    const app= express();
    app.use(express.static('public'))

    app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
        var firstNumber = parseInt(req.params.firstNumber) 
        var secondNumber = parseInt(req.params.secondNumber)
        var result = firstNumber + secondNumber || null
        if(result == null) {
          res.json({result: result, statusCode: 400}).status(400)
        }
        else { res.json({result: result, statusCode: 200}).status(200) } 
      })

      //substract
      app.get('/subsTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
        var firstNumber = parseInt(req.params.firstNumber) 
        var secondNumber = parseInt(req.params.secondNumber)
        var result = firstNumber - secondNumber || null
        if(result == null) {
          res.json({result: result, statusCode: 400}).status(400)
        }
        else { res.json({result: result, statusCode: 200}).status(200) } 
      })
    
    
    const port=3040;
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port);
    })