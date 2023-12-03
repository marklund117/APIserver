// using express for our API instead of HTTP
const express = require('express')
const app = express()
const port = 8001 // the example used 3000 but I like this one

// data stuff
let todoList = []

// handle a get request
app.get('/', (req, res) => {
    res.send('We Live in a Society. GET request.')
})

// let's set up a new route - requires a restart to work
app.get('/new', (req, res) => {
    res.send('You Have Navigated to a New Route.')
})

// add TODO. How can we respond to a post request?
app.post('/', (req, res) => {
    // get new todo text

    todoList.push(
        {
            // object structure should match the app
        }
    )
    res.send('Got a POST request.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



