const express = require('express')
const app = express()
const port = 3000 //3000번 포트에서 연결

app.get('/', (req, res) => {
    res.send('Hello World!') //루트 URL 또는 라우트에 대한 요청에 응답
}) //다른 경로에 대해서는 404 Not Found로 응답한다

app.post('/', function(req, res){ //루트 라우트에서 POST 요청에 응답
    res.send('Got a POST request');
})

app.put('/user', function(req, res){ // /user 라우트에 대한 PUT 요청에 응답
    res.send('Got a PUT request at /user');
})

app.delete('/user', function (req, res){ // /user 라우트에 대한 DELETE 요청에 응답
    res.send('Got a DELETE request at /user');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})