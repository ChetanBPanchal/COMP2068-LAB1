const express = require('express')

const app = express()

let me = (req,res) => {
    res.writeHead(200)
    res.write('Hello I am Chetan Panchal Basically I am From India. \nI have Complete Backelor in Computer Engineering after That i have Pursue as Android Developer.  \nI Can Develope Mobile App By Using Java, Kotlin and Flutter')
    res.end()
}

let mom = (req,res) => {
    res.writeHead(200)
    res.write('My Mothers name is Manisha Panchal. She is the best teacher of mine who teaches me lesson based on the Life.')
    res.end()
}

let dad = (req,res) => {
    res.writeHead(200)
    res.write('My Fathers name is Bhikhabhai Panchal. He is the one who become backbone of mine in Every Situation.He is Very Hard working person. ')
    res.end()
}

app.use('/me', me)
app.use('/mom', mom)
app.use('/dad', dad)


app.listen(3000)
console.log('Express Running on port 3000')