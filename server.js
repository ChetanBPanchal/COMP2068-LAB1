const express = require('express')

const app = express()

let me = (req,res) => {
    res.writeHead(200)
    res.write('\t\t\t\t\t\t\tHello I am Chetan Panchal. \n\nMy Native Place is Guharat,India. \nI have Complete Backelor in Computer Engineering after That i have Pursue as Android Developer for 3 years.  \nI Can Develope Mobile App By Using Java, Kotlin and Flutter')
    res.end()
}

let mom = (req,res) => {
    res.writeHead(200)
    res.write('My Mothers name is Manishaben Panchal. \n In Each and every steps she supported me and encourage me.\nShe is the best teacher of mine who teaches me lesson based on the Life.')
    res.end()
}

let dad = (req,res) => {
    res.writeHead(200)
    res.write('My Fathers name is Bhikhabhai Panchal. \nTo give me Success he is the person who always becomes the best support system for me.\nHe is the one who becomes my backbone of mine in Every Situation.\nHe is a Very Hard working person. ')
    res.end()
}

let home = (req,res) => {
    res.writeHead(200)
    res.write('Hello Professor,\n')
    res.write('Node Js is a Totally new Language for me,\n')
    res.write('So in the Below link, i tried to create something different,\n\n')
    res.write('\tSo, To know About me u can Visit Link http://localhost:3000/me\n\n\n')
    res.write('Now let me Give Basic information regarding my family ,\n')
    res.write('\n\tTo know about my Father you can visit http://localhost:3000/dad')
    res.write('\n\tAnd To know about my Mother you can visit http://localhost:3000/mom')
    res.end()
}

app.use('/me', me)
app.use('/mom', mom)
app.use('/dad', dad)
app.use('/home', home)


app.listen(3000)
console.log('Express Running on port 3000')