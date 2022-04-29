const express= require("express");
const app=express();
const path=require("path");

app.use(express.static(`${__dirname}/public`))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))


app.get("/",(req,res)=>{
    const random=Math.floor(Math.random()*10)+1
    res.render("home",{random});
})

app.get("/utilities",(req,res)=>{
    const utilities=["iphone","ipad","mobiles","electronic devices"]
    res.render("utilities",{utilities});
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})






app.listen(3000,()=>{
    console.log("port started");
})