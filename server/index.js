const express= require("express")
const bodyparser =require('body-parser');
const cors = require('cors');


const app =express();
//setup server (setup step 3)
const port=process.env.PORT || 5000 ;
app.use(bodyparser());
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())

app.get('/',function(req,res){
    res.send('hello world')
})

const userRoutes = require('./src/routes/user.route');
app.use('/api/v1', userRoutes);

app.listen(port,function(){
    console.log("port is runnign ata port")
})