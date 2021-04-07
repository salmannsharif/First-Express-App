const express=require("express");
const app=express();
const port=80;

app.get("/",(req, res)=>{
    res.send("This is my home page of my first express app with salman")
})

app.get("/about",(req, res)=>{
    res.send("This is my about page of my first express app with salman")
})
app.get("/services",(req, res)=>{
    res.send("This is my services page of my first express app with salman")
})
app.get("/contact",(req, res)=>{
    res.send("This is my contact page of my first express app with salman")
})

app.post("/contact",(req, res)=>{
    res.send("This is a post request  contact page of my first express app with salman")
})


app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found on my website")
})


app.listen(port,()=>{
    console.log(`The application running succesfully on port : ${port}`)
})
