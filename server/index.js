const express = require("express");
const app = express();
const cors = require("cors"); //ask sir if pwede magamit cors

//middleware
app.use(cors())
app.use(express.json())

app.listen(5000, () =>{
   console.log("Server has started on port 5000") 
})