const express = require("express")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    status: "200",
    message: "This is the homepage!",
  })
})

app.get("/query/:name", (req, res) => {
  const name = req.params.name
  res.send("the animal you choose is : " + name)
})

app.post("/secret", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (username === "mouad" && password === "azerty") {
    res.json("You entered the right credentials.")
  } else {
    res.json("i'm sorry! but that is false.")
  }
})
app.listen(3000)
