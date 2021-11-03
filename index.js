const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
app.use(express.json())

//------ DB config ------
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB ✨🎉🎊"))
  .catch((err) => console.log(err))

app.listen("5000", () => {
  console.log("Backend is Running 🟢🟢🟢")
})
