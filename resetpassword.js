async function checkdetails(){
let newpassword= (document.getElementById("newpassword")).value;
let conformpassword= (document.getElementById("conformpassword")).value;
if(newpassword === conformpassword){
    let data={
        "Email":localStorage.getItem("Email"),
        "Password":(document.getElementById('newpassword')).value
    }
    let resdata= await fetch("https://trim-url-app.herokuapp.com/newpassword",{
        method:"POST",
        headers: {
           'Content-Type': 'application/json',
           // 'Content-Type': 'application/x-www-form-urlencoded',
           'authorization':localStorage.getItem("token")
         },
         body: JSON.stringify(data)
    
    });
    let loginRes= await resdata.json();
 alert(loginRes.message);
 window.location.href="./login.html"
}else{
    alert("Both passowrds are not same")
}   
}

document.getElementById('usersubmit').addEventListener("click",(e)=>{
    e.preventDefault();
   checkdetails();
    return false;
    })