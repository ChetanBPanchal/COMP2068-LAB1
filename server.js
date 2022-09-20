const express = require('express')

const app = express()

let me = (req,res) => {
    res.writeHead(200)
    res.write('Me')
    res.end()
}

let mom = (req,res) => {
    res.writeHead(200)
    res.write('Mom')
    res.end()
}

let dad = (req,res) => {
    res.writeHead(200)
    res.write('Dad')
    res.end()
}

app.use('/me', me)
app.use('/mom', mom)
app.use('/dad', dad)


app.listen(3000)
console.log('Express Running on port 3000')