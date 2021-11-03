const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const postRoutes = require("./routes/post")

dotenv.config()
app.use(express.json())

//------ DB config ------
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB ✨🎉🎊"))
  .catch((err) => console.log(err))

//------- Routing ---------
app.use("/api/post", postRoutes)

app.listen("5000", () => {
  console.log("Backend is Running 🟢🟢🟢")
})
