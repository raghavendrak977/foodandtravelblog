var email="hero@gmail.com"
var mypass="123";
function authorization()
{
   var usergivenUSID=document.getElementById("mail").value;
  var usergivenPass=document.getElementById("pass").value;
  if(email==usergivenUSID && mypass==usergivenPass)
  {
    document.getElementById("fom").setAttribute("action","../HTML/Home.html")
    document.getElementById("but").setAttribute("type","submit")
  }
  else if(email!=usergivenUSID && mypass==usergivenPass)
    {
        document.getElementById("mail").style.borderColor="red";
        document.getElementById("pass").style.borderColor="royalblue";
        document.getElementById("main").style.backgroundImage="linear-gradient(70deg,red,purple)"
        document.getElementById("result").innerHTML="Wrong email id"
  }
  else if(email==usergivenUSID && mypass!=usergivenPass)
  {
    document.getElementById("mail").style.borderColor="royalblue";
    document.getElementById("pass").style.borderColor="red";
    document.getElementById("main").style.backgroundImage="linear-gradient(70deg,red,red)"
    document.getElementById("result").innerHTML="Wrong password"
  }
  else{
    document.getElementById("mail").style.borderColor="red";
    document.getElementById("pass").style.borderColor="red";
    document.getElementById("main").style.backgroundImage="linear-gradient(70deg,red,red)"
    document.getElementById("result").innerHTML="Wrong id and password"
  }
}
function visiblepassword()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("monkey").setAttribute("src","../assests/images/open.jpg")
    document.getElementById("monkey").style.transform="rotateY(360deg)"
}
function hidepassword()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("monkey").setAttribute("src","../assests/images/close.jpg")
    document.getElementById("monkey").style.transform="rotateY(-360deg)"
}