const express = require('express')
const app = express()
const port = 3000
// to serve static files
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.end();
})
app.post('/', (req, res)=>{
    res.send("POST request")
})

app.put('/user', (req, res)=>{
    res.send("PUT users ")
})

app.delete('/user', (req, res)=>{
    res.send("DELETE USERS request")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))