import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", fullDate)
})

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = new Date() 

const fullDate = {
    year: date.getFullYear(),
    day: date.getDate(),
    month: months[date.getMonth()],
    todos: [],
    dayInWeek: days[date.getDay()],
    workTodos: []
}

// document.getElementsByClassName

app.get("/work", (req, res) => {
    res.render("work.ejs", fullDate)
})

app.post("/work", (req, res) => {
    fullDate.workTodos.push(req.body["todo"])
    res.render("work.ejs", fullDate)
})

app.post("/", (req, res) => {
    fullDate.todos.push(req.body["todo"])
    res.render("index.ejs", fullDate)
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})