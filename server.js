const express= require ('express')
const app=express()
const path = require("path");


app.use(express.json())
app.use (express.urlencoded({extended:true}))

app.use("/", express.static(path.join(__dirname, "public")));









app.get('/root',(req,res)=>{
    res.json({message:"hello form api"})
})









app.listen(4444,()=>{
    console.log("server started on http://localhost:4444")
})

    
