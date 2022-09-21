const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello World! Olawale')
})

app.get('/user', (req, res) => {
    res.send('Hey! this is user directory')
  })

app.post('/createuser', (req, res) => {
    const data = req.body
    if (data.firstname == '' || data.lastname == '' || data.email == ''){
        res.send({
            message: 'All fields are required'
        })
    } else {
        res.send({
            message: `User created successfully, welcome to the club ${data.firstname} ${data.lastname}`
        })
    }
})