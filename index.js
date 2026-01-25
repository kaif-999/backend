import express from "express"
const app = express()

import contactRoutes from "./routes/contact.routes.js"
import {connectDB} from "./config/database.js"

const PORT = process.env.PORT 
//Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use("/",contactRoutes)     

// Database connection
connectDB()


// app.get('/',(req, res)=>{

//     const childs =[{name:"kailash", age:21},{name:"Kher", age:25},{name:"F60", age:25},]
//    res.json(
//     childs
//    );
// })




app.listen(PORT, ()=>{
    console.log(`SERVER IS WORKING NOW ${PORT}`)
})
