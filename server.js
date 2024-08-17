const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send("Hello world")
})

app.post('/', (req, res)=>{
    res.send("This is POST ")
})

app.put('/', (req, res)=>{
    res.send("This page put")
} )

app.delete('/', (req, res)=>{
    res.send('this is delete page')
})




app.listen(port, () =>{
    console.log(`Star http://localhost:${port}`)
})