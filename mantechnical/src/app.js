const express=require("express");
const path=require("path");
const hbs=require("hbs");
const User=require("./models/usermessage");
const { registerPartials } = require("hbs");
require("./db/conn");
const app=express();
const port=process.env.PORT || 3000;

app.use(express.urlencoded({extended:false}))
app.use(express.json());

//setting the path
const staticpath=path.join(__dirname,"../public");
// const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");
//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set('views','./templates/views');
hbs.registerPartials(partialpath);

app.get("/",(req,res)=>{
    res.render("index");
})
// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })
app.post("/contact",async(req,res)=>{
    try{
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
        // res.send(req.body);
    }catch(error){
        res.status(500).send(error);
}
});

//server create
app.listen(port,()=>{
    console.log('server is running at port no ${port}');
})