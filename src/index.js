const express = require("express");

const app =express();

app.get("/", (req, res) =>{
    res.send("hello word express");
});

app.listen(3333, () =>{
    console.log("servidor rodando na porta 3333")
});   