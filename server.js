const express = require("express");
const authenticateFirebaseToken = require("./middleware/middleware")
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',async (req,res) =>{
    return res.json({msg : "Hi! There"})
})

app.get('/secure',authenticateFirebaseToken,(req,res)=>{
    res.json({msg : "secureroute",user:req.user})
})


app.listen(3000,()=>{
    console.log("Server Started on 3000!");
});