// HANDLEBARS IS A TEMPLETE ENGINE USED TO PROVIDE THE DYNAMIC WEBPAGES AND MAKE THE REUSABLE OF CODE TO WEBSITE




const geocode=require("./utlis/geocode");
const forecast=require("./utlis/forecast");
const path=require("path");
const express=require("express");
const hbs=require("hbs");
const app=express();

app.listen(3000,()=>{
    console.log("THE SERVER 3000 IS UP");
})



//DEFINE PATH FOR EXPRESS CONFIG
const publicpathdirectory=path.join(__dirname,"../public");
const  templatespath=path.join(__dirname,"../templates/hbdfiles");
const partialspath=path.join(__dirname,"../templates/partials");



// SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set("view engine","hbs")       // SET IS USED FOR SETTING THE ENGINE WE USED IN EXPRESS  AND PROVIDING THE SETTING THE AND VALUE TO EXPRESS
app.set("views",templatespath);
hbs.registerPartials(partialspath);


// SETUP STATIC DIRECTORY FOR SERVER
app.use(express.static(publicpathdirectory));



// TO SEND THE EXECUTION WHEN THE URL IS USED
app.get('',(req,res)=>{
res.render('index',{
    title:"WEATHER APP",
    name:"YUG KHOKHAR"
})               // RENDER IS USED TO PROVIDE AN HANDLEBAR TEMPLATE

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"APP",
        name:"YUG KHOKHAR"
    })             // RENDER IS USED TO PROVIDE AN HANDLEBAR TEMPLATE
    
 })
 app.get('/help',(req,res)=>{
     res.render("help",{
            title:"HELP PAGE",
            name:"YUG KHOKHAR"
        })               // RENDER IS USED TO PROVIDE AN HANDLEBAR TEMPLATE
        
        })
      
app.get("/help/*",(req,res)=>{
  res.send("THE HELP ARTICLE NOT FOUND")  
})

app.get("/help/*",(req,res)=>{
    res.render("error",{
        title:"404",
        errormessage:"HELP ARTICLE NOT FOUND",
        name:"YUG"
        
    })  
  })

app.get("/weather",(req,res)=>{

if(!req.query.address)
{
    return res.send({
        error:" PLEASE ENTER THE ADDRESS"
    })
}
 geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
  if(error)
 {
           return res.send({error});
 }
       
      forecast(latitude,longitude,(error,forecastdata)=>{
          if(error)
          {
              return res.send({error});
          }
         else
         {  res.send({
          location,
          address:req.query.address,
          forecast:forecastdata
         
      })
    }
      })
      })



})


































































   /*     app.get('',(req,res)=>{
            res.send("WELCOME TO THE HOMEPAGE");
        })
        app.get("/about",(req,res)=>{
            res.send("<h1>WEATHER SERVICE</h1>");
        })
        app.get("/contact",(req,res)=>{
            res.send("HERE YOU CAN CONTACT US");
        })
        
        app.get("/weather",(req,res)=>{
            res.send({
                forecast:"THERE IS 20 DEGREES OUT",
                location:"SURAT"
            });
        })
        
*/

/*
 const express=require("express");
const app=express();
const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,resp)
{
  resp.sendFile(__dirname+"/index.html");
}
);

app.post("/",(req,resp)=>
{
var n1=Number(req.body.num1);
var n2=Number(req.body.num2);
var result=Number(n1+n2);
  resp.send("THE ANSWER IS: "+result);
 
}
);
app.get("/about",function(req,resp)
{
resp.send("<h1>YUG KHOKHAR</h1>");


});
app.listen(3000,()=>
{
  console.log("THE SERVER HAS STARTED ON PORT 3000");
});

*/


