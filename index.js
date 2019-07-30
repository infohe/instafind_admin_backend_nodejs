var express = require('express');
var indexRouter = require('./routes/main');
var index = express();


//Middleware
index.use(express.json());


//Global Functions
global.GlobalErrorRespose = (content = "Sorry, We couldn't find that!") => {
    return {"status": "error", "content": content};
};
global.GlobalSuccessRespose = (content = "That was a success") => {
    return {"status": "success", "content": content};
};


//Main Routing
index.use('/', indexRouter);


// 404 Not Found
index.use('/', (req, res) => {
    res.status(404).json(GlobalErrorRespose())
});


//Server Starts
const port = process.env.PORT || 8080;
index.listen(port, () => {
    console.log(`Server Started on port ${port}`)
});