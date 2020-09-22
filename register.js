
async function registerUser(){
    let data={
        "Email":(document.getElementById('inputEmail4')).value,
        "Dob":(document.getElementById('inputDob')).value,
        "Password":(document.getElementById('inputPassword4')).value,
        "Address":(document.getElementById('inputAddress')).value,
        "Address2":(document.getElementById('inputAddress2')).value,
        "City":(document.getElementById('inputCity')).value,
        "State":(document.getElementById('inputState')).value,
        "Zip":(document.getElementById('inputZip')).value,
        "Gridcheck":(document.getElementById('gridCheck')).value
         
    }
     let responec = await fetch("https://trim-url-app.herokuapp.com/register",{
         method:"POST",
         headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
  
     });
     let message=await responec.json();
    if(message.message=== "user alredy present"){
        //return false;
        (document.getElementById('inputEmail4')).style.boxShadow="inset 1px 1px 10px 2px rgba(248, 0, 152, 0.54)";
        alert(message.message);
       
    }else{
        alert(message.message);
          window.location.href="./login.html"
    }


}
document.getElementById("usersubmit").addEventListener("click",(e)=>{
 e.preventDefault();
registerUser();

 return false;
})
