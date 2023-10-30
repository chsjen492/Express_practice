var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
}; //앱에 대한 요청이 해당 함수를 거쳐 전달될 때 "LOGGED"를 출력하는 미들웨어 함수

app.use(myLogger); //미들웨어 함수 호출

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);