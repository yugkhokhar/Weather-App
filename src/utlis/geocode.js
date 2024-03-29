const request=require("request");

const geocode=(address,callback)=>{

const url="http://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoieXVna2hva2hhciIsImEiOiJja3BrMGNuc2kxZTF0Mm9vOWphbjBoeHJvIn0.eSUfuVkSDpvzAXr3X-nHHA&limit=5"

request({url,json:true},(error,response)=>
{
if(error)
{
    callback("UNABLE TO FIND THE LOCATION",undefined);
}
else if(response.body.message)
{
    callback("NO MATCH FOUND",undefined);
}
else
{
    callback(undefined,{
        latitude:response.body.features[0].center[0],
        longitude:response.body.features[0].center[1],
        location: response.body.features[0].place_name
    })
}




})
}

module.exports=geocode
