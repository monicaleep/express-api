const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("hello").status(200)
})

app.listen(3000, ()=>{
    console.log('now listening on port 3000')
})