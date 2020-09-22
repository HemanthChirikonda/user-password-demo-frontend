async function genaretecode(){
    let data={
        "Email":(document.getElementById('inputEmail4')).value,
        "Dob":(document.getElementById('inputDob')).value
    };

    let resdata= await fetch("https://trim-url-app.herokuapp.com/gencode",{
        method:"POST",
        headers: {
           'Content-Type': 'application/json',
           // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify(data)
    
    });
    let loginRes= await resdata.json();
   alert(loginRes.message);


}
(document.getElementById('usersubmit2'))?.addEventListener("click",(e)=>{
e.preventDefault();
genaretecode();
return false;
})




async function verifycode(){
    let data={
        "Email":(document.getElementById('inputEmail4')).value,
        "Password":(document.getElementById('inputcode')).value
    }
let resdata= await fetch("https://trim-url-app.herokuapp.com/verify",{
    method:"POST",
    headers: {
       'Content-Type': 'application/json',
       // 'Content-Type': 'application/x-www-form-urlencoded',
       'authorization':localStorage.getItem("token")
     },
     body: JSON.stringify(data)

});
let loginRes= await resdata.json();
if(loginRes.token){
    console.log(loginRes.token,data);
    localStorage.setItem("Email",data.Email)
    localStorage.setItem("token",loginRes.token);
    window.location.href="./resetpassword.html"
}else{
    alert(loginRes.message);
}
};

(document.getElementById('usersubmit1'))?.addEventListener("click",(e)=>{
    e.preventDefault();
    verifycode();
    return false;
    })