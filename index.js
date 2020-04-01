// const express=require ('express')
// const setupDB=require('./config/database')
// const router=require('./config/routes')
// const app=express()
// const port=3040

// app.use(express.json())
// app.use('/',router)
// //db configuration
// setupDB()

// app.listen(port,()=>{
//     console.log('listening on port',port)
// })
const express = require("express");
const app = express();
const setupDB = require("./config/database");
const port = 3040;
const router = require("./config/routes");
app.use(express.json());
app.use("/", router);
//db configuration
setupDB();

app.listen(port, () => {
  console.log("listening on port", port);
});
