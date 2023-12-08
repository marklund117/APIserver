// using express for our API instead of HTTP
const express = require('express')
const app = express()
const port = 8001 // the example used 3000 but I like this one

// body parser stuff
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// data stuff - temporary hardcoded to-do list
let todoList = [
    {   
        index: 0,
        isComplete: false,
        todoText: 'Item One',
        editMode: false,
        category: ''
    },
    {   
        index: 1,
        isComplete: false,
        todoText: 'Item Two',
        editMode: false,
        category: ''
    },
    {   
        index: 2,
        isComplete: false,
        todoText: 'Item Three',
        editMode: false,
        category: ''
    }
]

// temporary hardcoded category list
let catList = ['Example Category', 'Another Category', 'Yet Another Category']

// TUTORIAL STUFF ****************************************************************************

// handle a get request
app.get('/', (req, res) => {
    res.send('Welcome to the TodoAPI')
})

// let's set up a new route - requires a restart to work
//app.get('/new', (req, res) => {
    //res.send('You Have Navigated to a New Route.')
//})

// REAL FUNCTIONALITY STARTS HERE ************************************************************

// 1 GET the entire todoList and SEND it to the requester
app.get('/api/getTodo', (req, res) => {
    res.send(todoList) // just give them the list
})


// 2 POST a single TODO (add it to the array) and send the list
app.post('/api/postTodo', (req, res) => {
    // get new todo text

    todoList.push(
        {
            // object structure should match the app
            index: todoList.length, // 
            isComplete: false, // false bool to start
            todoText: req.body.todo, // from the request
            editMode: false,
            category: '' // new prop for categories
        }
    )
    console.log(req.body.todo)
    res.send(todoList)
})


// 3 PUT a todo (update)
app.put('/api/putTodo', (req, res) => {
    todoList[req.body.index].todoText = req.body.todo
    // then edit the item
    console.log(toBeEdited)
    res.send(todoList)
})

// 4 Delete a todo
app.post('/api/deleteTodo', (req, res) => {
    let newArr = todoList.filter((Element) => Element.todoText != req.body.todo) // everything but the item to be deleted
    todoList = newArr // update the original to match the pruned version
    res.send(todoList) // send back the edited list I guess?
})

// 5 Get all todos in a specified category
app.post('/api/filterCat', (req, res) => {
    let catSlice = todoList.filter((Element) => Element.category = req.body.category)
    res.send(catSlice) // send them a filtered version of catList
})

// 6 get all categories
app.get('/api/getCat', (req, res) => {
    res.send(catList) // just give them the category list
})

// 7 post a category
app.post('/api/postCat', (req, res) => {
    catList.push(req) // this is probably wrong, what should I push in?
})

// 8 put a category (edit) (what is a put request bro)
app.put('/api/putCat', (req, res) => {
    // ?????????????????
})

// 9 delete a category
app.post('/api/deleteCat', (req, res) => {
    let catNew = catListList.filter((Element) => Element != req)
    catList = catNew // update the original to match the pruned version
    res.send(catList) // send back the edited list I guess?
})

// I need to read up on what PUT does

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



