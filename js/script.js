var uname =document.getElementById("uname");
var uemail =document.getElementById("uemail");
var upass = document.getElementById("pass");
var userArr =[]
var subbtn =document.getElementById("subbtn");
var curindex;
var usearch =document.getElementById("search");
var chName =document.getElementById("ch-name");
var em=document.getElementById("em-name")
var close1 = document.getElementById("close")
var close2 = document.getElementById("close2")

close1.onclick=function(){
 
  chName.style.display="none"
 
 
}

close2.onclick = function(){
  em.style.display="none"
}


if(localStorage.getItem("user") != null){
  userArr = JSON.parse(localStorage.getItem("user"))
  var cart = ``;
  for(var i = 0; i<userArr.length;i++){
    cart+=`
    <tr>
    <td>${userArr[i].userName}</td>
    <td>${userArr[i].userEmail}</td>
    <td>${userArr[i].userPass}</td>
    <td><button onclick="del(${i})" class="btn btn-danger">Delete</button></td>
    <td><button onclick="up(${i})" class="btn btn-primary">Update</button></td>
    <td><button class="btn btn-success">Visite</button></td>
    </tr>
    

    `
  }
  document.getElementById("body").innerHTML=cart
}

function sear(se){
  var cart=``;
  for(var i =0; i<userArr.length;i++){
    if(userArr[i].userName.includes(se)){
      cart+=`
      <tr>
      <td>${userArr[i].userName.replace(se,`<span>${se}</span>`)}</td>
      <td>${userArr[i].userEmail}</td>
      <td>${userArr[i].userPass}</td>
      <td><button onclick="del(${i})" class="btn btn-danger">Delete</button></td>
      <td><button onclick="up(${i})" class="btn btn-primary">Update</button></td>
      <td><a class="btn btn-success" href = "${userArr[i].userEmail}" target=_blank>Visite</a></td>
      </tr>
      
  
      `
      
    }
  }
  document.getElementById("body").innerHTML=cart

}

subbtn.onclick=function(){
  if(subbtn.innerHTML == "Submit"){
    add()
  }else{
    var userObj={
      userName:uname.value,
      userEmail:uemail.value,
      userPass:upass.value
    }
    userArr[curindex] =userObj;
    subbtn.innerHTML = "Submit";
    subbtn.classList.replace("btn-primary","btn-danger")
   

  }
  localStorage.setItem("user",JSON.stringify(userArr))
  display()
  
}


function add(){
  if(checkName(uname.value)&&(checkEmail(uemail.value))){
    var userObj={
      userName:uname.value,
      userEmail:uemail.value,
      userPass:upass.value
    }
    
    userArr.push(userObj);
    uname.value = "" ;
    uemail.value ="";
    upass.value ="";
  }else if(checkName(uname.value)==false){
    chName.style.display="flex"
  }else if(checkEmail(uemail.value)==false){
    em.style.display="flex"
  }
 
  
  
}

function display(){
  var cart = ``;
  for(var i = 0; i<userArr.length;i++){
    cart+=`
    <tr>
    <td>${userArr[i].userName}</td>
    <td>${userArr[i].userEmail}</td>
    <td>${userArr[i].userPass}</td>
    <td><button onclick="del(${i})" class="btn btn-danger">Delete</button></td>
    <td><button onclick="up(${i})" class="btn btn-primary">Update</button></td>
    <td><a class="btn btn-success" href = "${userArr[i].userEmail}" target=_blank>Visite</a></td>
    </tr>
    

    `
  }
  document.getElementById("body").innerHTML=cart
}

function up(i){
  curindex = i;
  uname.value = userArr[i].userName
  uemail.value = userArr[i].userEmail
  upass.value = userArr[i].userPass
  subbtn.innerHTML = "update user";
  subbtn.classList.replace("btn-danger","btn-primary")
}

function del(i){
  userArr.splice(i ,1)
  localStorage.setItem("user",JSON.stringify(userArr))

  display()

}

function checkName(str){
  var regex = /^[A-Z][A-Za-z0-9]{2,}$/;
  return regex.test(str)
}

function checkEmail(str){
 
  var regex = /^[A-Za-z0-9]{1,}@(gmail|yahoo).com$/
  return regex.test(str)
}
var wordCap = document.querySelector(".inp-name")
function inpname(n){
 
  var d =n.split("");
  if(d[0] != d[0].toUpperCase()){
    wordCap.style.display="block"  
  }else{
    wordCap.style.display="none"  
  }
}

