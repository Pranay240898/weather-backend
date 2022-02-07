"use strict"

var express=require('express')
var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser())

app.listen(5000)
console.log('Node.js Express server is running on port 5000...')

app.get('/v1/weather', get_weather)
app.get('/v1/hello', get_greet)
app.post('/v1/auth',post_token)

function get_weather(request,response){
    response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"base":"stations","main":{"temp":276.58,"feels_like":276.58,"temp_min":275.25,"temp_max":279.92,"pressure":1019,"humidity":80},"visibility":6437,"wind":{"speed":0.45,"deg":203,"gust":0.45},"clouds":{"all":100},"dt":1642392954,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642347934,"sunset":1642381185},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}
function get_greet(request, response) {
    response.json({
        "greet": "Hi friends!"
    })
}
function post_token(request, response) {
    response.json({
        "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5heSIsInBhc3N3b3JkIjoicHJhbmF5In0.dJxsvjugigBiqncrKsn6WqR_TJ9pZP9bTtIUBsFksB8",
        "expires": new Date()
    })
}


