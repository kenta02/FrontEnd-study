'use strict'
const express = require('express')
const app = express()

app.listen(3000)
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('index')
})

app.get('/api/todo', (req, res, next) => {
    let data = db.get();
    res.json([
        {
            title: "テストToDo1",
            done: false
        },
        {
            title: "テストToDo2",
            done: false
        }
    ])
})