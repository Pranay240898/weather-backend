"use strict"

var express=require('express')
var app=express()

app.listen(3000)
console.log('Node.js Express server is running on port 3000...')

app.get('/data/2.5/weather',get_weather)

function get_weather(request,response){
    response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"base":"stations","main":{"temp":276.58,"feels_like":276.58,"temp_min":275.25,"temp_max":279.92,"pressure":1019,"humidity":80},"visibility":6437,"wind":{"speed":0.45,"deg":203,"gust":0.45},"clouds":{"all":100},"dt":1642392954,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642347934,"sunset":1642381185},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}

