     // RESPONSE WE GET IS A JSON DATA

const weatherform=document.querySelector("form");
const input=document.querySelector("input");
const messageone=document.getElementById("message1");
const messagetwo=document.getElementById("message2");
weatherform.addEventListener("submit",(e)=>{
e.preventDefault();
const location=input.value;
messageone.textContent="LOADING...";
messagetwo.textContent="";
fetch("http://localhost:3000/weather?address="+location).then((response)=>{
    
    response.json().then((data)=>{
        if(data.error)
        {
            messageone.textContent=data.error;
        }
else
{        
    messageone.textContent=data.location;
    messagetwo.textContent=data.forecast;
}
    })
    
})
})












