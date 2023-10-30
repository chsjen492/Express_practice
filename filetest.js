const express = require('express')
const app = express()
const port = 3000 //3000번 포트에서 연결

app.use(express.static('public'));