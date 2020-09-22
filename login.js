async function checkPassword(){
    let data={
        "Email":(document.getElementById('exampleInputEmail1')).value,
        "Password":(document.getElementById('exampleInputPassword1')).value
    }
let resdata= await fetch("https://trim-url-app.herokuapp.com/login",{
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
    window.location.href="./dashboard.html"
}else{
    alert(loginRes.message);
}
}