//importing express and body parser
const express = require('express');
const bodyParser = require('body-parser');

//setting hostname and port
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

//using express and body parser. Printing on log each method required
const app = module.exports = express();
app.use((req,res,next) => { 
    console.log('[%s] %s -- %s', new Date(), req.method, req.url);
    next();
});
app.use(bodyParser.json());

//starting server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
}); 