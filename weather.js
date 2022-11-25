// setTimeout function is used to execute an function after an particular interval of time
// this function get stored in nodeAPI and then send to call queue after the time set and then send to call stack when it is empty 

const request=require("request");   // USED TO MAKE HTTP REQUEST
const geocode=require("./geocode.js");

setTimeout(() => {
    console.log("1 sec delay");
},1000);


setTimeout(()=>{
console.log("0 sec delay");
},2000)
console.log("bye");



const urllink="http://api.weatherstack.com/current?access_key=98e643aa489ab287820232595b9c4e27&query=rajkot&units=m";
// THE URL CONTAINS THE KEY AND VALUE PARAMETERS  THE FIRST KEY AFTER CURRENT? IS //access_key=url&query=place&units=f/m/s



request({url:urllink},(error,response)=>{
 
    if(error)
{
    console.log("UNABLE TO CONNECT TO SERVER");
}
else if(response.body.error)
{
    console.log("UNABLE TO FIND THE CURRENT LOCATION");
}
 else{  
      const obj=JSON.parse(response.body);
    console.log(obj.current);    
 }
})


request({url:urllink},(error,response)=>{
    if(error)
{
    console.log("UNABLE TO CONNECT TO SERVER");
}
else if(response.body.error)
{
    console.log("UNABLE TO FIND THE CURRENT LOCATION");
}
 else
 {
        const obj=JSON.parse(response.body);
    console.log(obj.current);    
  }
})


request({url:urllink,json:true},(error,response)=>{  // json true directly converts the json string to object accessible
    if(error)
{
    console.log("UNABLE TO CONNECT TO SERVER");
}
    else
    {
      console.log("there is "+response.body.current.temperature+" ouside "+response.body.current.feelslike);    
    }
    })








// GEOCODING IS USED TO CONVERT THE ADDRESS TO GEOMETRY COORDINATES

const GEOCODING="http://api.mapbox.com/geocoding/v5/mapbox.places/ahemdabad.json?access_token=pk.eyJ1IjoieXVna2hva2hhciIsImEiOiJja3BrMGNuc2kxZTF0Mm9vOWphbjBoeHJvIn0.eSUfuVkSDpvzAXr3X-nHHA&limit=1";

request({url:GEOCODING,json:true},(error,response)=>{
if(error) // ERROR JUST PROVIDES AN LOW LEVELERROR PROBLEM IN WHICH CONNECTION IS GONE
{
    console.log("UNABLE TO CONNECT TO SERVER");
}
else if(response.body.message)
{
    console.log("UNABLE TO FIND THE LOCATION");
}
else
{
    const LONGITUDE=response.body.features[0].center[0];
    const LATITUDE=response.body.features[0].center[1];
console.log("THE LONGITUDE IS:"+LONGITUDE+"\n THE LATITUDE IS: "+LATITUDE);
}
})

console.log(process.argv);
const address=process.argv[2];

if(!address)
{
    console.log("PLEASE PROVIDE THE ADDRESS");
}
else{
    geocode(address,(error,{LATITUDE,LONGITUDE,location}={})=>{
        if(error)
        {
            return console.log(error)
        }
       
      forecast(LATITUDE,LONGITUDE,(error,forecastdata)=>{
          if(error)
          {
              return console.log(error)
          }
      
      console.log(location);
      console.log(forecastdata);
      })
      })
}





