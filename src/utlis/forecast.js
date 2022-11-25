const request=require("request");
const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=98e643aa489ab287820232595b9c4e27&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"&units=m"
        request({url,json:true},(error,response)=>{
     
        if(error)
        {
            callback("UNABLE TO CONNECT TO SERVER",undefined);
        }
      else if(response.body.error)
        {
            callback("UNABLE TO FIND THE CURRENT LOCATION",undefined);
        }
        
         else
         {  
          callback(undefined,"TODAY TEMPERATURE IS "+response.body.current.temperature+" DEGRESS BUT IT FELLS LIKE "+response.body.current.feelslike+" DEGRESS")    
         }
    
        })
    }

    module.exports=forecast

