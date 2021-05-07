const express=require("express")
const path=require("path")
const fs=require("fs")

const server=express()
const mainFolder=path.join(__dirname,"html")

server.get("/",(req,res)=>{
    res.sendFile(path.join(mainFolder,"index.html"))
})


server.use((req,res,next)=>{
    var fileToCheck=path.join(mainFolder,req.url)
    if(fs.existsSync(fileToCheck)){
        res.sendFile(fileToCheck)
    }else{
        res.status(404)
        res.sendFile(path.join(mainFolder,"404.html"))
        //res.end()
    }
})

server.listen(8021)