

document.getElementById('home').addEventListener('click',()=>{
    document.getElementById('display').innerHTML=`
    <div class="col-12">
        <form class="row" onsubmit="postdata();return false">
        <div class=" form-group col-12"> <lable for="Url">Long Url<lable></div>
          <div class="form-group col-8" style="text-align: center;">
            <input type="text" class="form-control" id="Url" placeholder="Url">
          </div>
          <div class="form-group col-4" >
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
    </div>
    `;
})

document.getElementById('dashboard').addEventListener('click',async ()=>{
    let data= await getdata();
    document.getElementById('display').innerHTML=`<table class="table border rounded table-lighter">
    <thead>
      <tr>
        <th scope="col" style="text-align:center;">Full url</th>
        <th scope="col">Short Url</th>
        <th scope="col">Clicks</th>
      </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>`;
console.log(data);
  data.forEach(element => {
      let tr= document.createElement('tr');
      let td1= document.createElement('td');
      let a1= document.createElement('a');
      a1.href=element.full;
      a1.innerText=element.full;
      td1.append(a1);
     tr.append(td1);
     let td2= document.createElement('td');
     let a2= document.createElement('a');
     a2.href="https://trim-url-app.herokuapp.com/"+element.short;
     a2.innerText=element.short;
     td2.append(a2);
     tr.append(td2);
     let td3= document.createElement('td');
    
     td3.innerText=element.clicks;
     
     tr.append(td3)
     document.getElementById('tbody').append(tr);
  });
})

async function getdata(req,res){
    let data= await fetch("https://trim-url-app.herokuapp.com/dashboard",{
         method:"GET",
         headers: {
       'Content-Type': 'application/json',
     // 'Content-Type': 'application/x-www-form-urlencoded',
     'authorization':localStorage.getItem("token")
          } 
         
     });
     let jsondata= await data.json();
   
     return jsondata;

 }
// getdata();


 async function postdata(req,res){
 let data= await fetch("https://trim-url-app.herokuapp.com/dashboard",{
method:"POST",
headers: {
    'Content-Type': 'application/json',
  // 'Content-Type': 'application/x-www-form-urlencoded',
  'authorization':localStorage.getItem("token")
       },
 body: JSON.stringify({
     "full":(document.getElementById('Url')).value,
     "Email":localStorage.getItem("Email")
})
 });

 let result= await data.json()
 alert(result.message);
}