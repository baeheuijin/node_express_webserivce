const express = require('express')
const app = express()
const port = 3000

// view template engine
app.set("view engine", "pug")
app.set("views",__dirname+"/views")

app.use(express.static("public"))

// routing : 경로에 해당하는 파일을 저장하는 법
app.get('/', (req, res) => {
  res.render("home")
});

app.get("/about", (req, res) => {
    res.render("about"); // help.pug 찾아서 서버에서 렌더링
});

app.get("/portfolio", (req, res) => {
    res.render("portfolio"); // help.pug 찾아서 서버에서 렌더링
});

app.get("/contact", (req, res) => {
    res.render("contact"); // help.pug 찾아서 서버에서 렌더링
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});