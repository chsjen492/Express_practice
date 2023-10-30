const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  // define the home page route
  app.get('/birds', function(req, res) {
    res.send('Birds home page');
  });
  // define the about route
  app.get('/birds/about', function(req, res) {
    res.send('About birds');
  });

app.post('/birds/things', function(req, res){
    console.log("success");
    res.json({result: true});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})