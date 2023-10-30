//배열을 이용해 REST API 코드 작성해보기
// GET, POST, PUT, PATCH, DELETE
// 응답은 json 포맷 유지

const express = require('express')
const app = express()
const port = 3000

const user = [
    {
        name: 'alex',
        age: 25,
    },
    {
        name: 'jane',
        age: 20,
    },
    {
        name: 'alex',
        age: 41,
    }
]

app.use(express.json());

//GET, POST, PUT, PATCH, DELETE
app.get('/', function(req, res){
    res.send("Hello");
})
app.get('/user', function(req, res){ //user 목록 반환
    res.send(Object.entries(user));
})
app.get('/user/:id', function(req, res){
    res.json(user[req.params.id]);
})
app.put('/user/:id', function(req, res){
    user[req.params.id].name=req.body.name;
    user[req.params.id].age=req.body.age;
    res.json(user[req.params.id]);
})
app.delete('/user/:id', function(req, res){
    let result = user[req.params.id];
    user.splice(req.params.id, 1);
    res.json(result);
})
app.post('/user', function(req, res){
    user.push(req.body);
    res.json(req.body);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})