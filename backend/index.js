const expres = require("express")
const { connection } = require("./Controllers/db")
const { userroute } = require("./Routes/userroute")
const cors=require("cors")
require("dotenv").config()
const app = expres()
app.use(expres.json())
app.use(cors())
app.use("/user",userroute)


app.get("/", (req, res) => {
    res.send("home page")
})

app.listen(process.env.port, async(req, res) => {
    try {
        await connection
        console.log("db is connected..")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running..")
})