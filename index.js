const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.listen(8000, (err)=>{
    if(err){
        console.log("Error Connecting to Server!");
        return
    }

    console.log("Successfully Connected to Server! 8000");
})