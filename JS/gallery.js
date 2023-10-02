var arrayImages=["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg","12.jpeg","13.jpeg"];
var i=0;
function header()
{
if(i>=7)
{
  i=0;  document.getElementById("header").style.backgroundImage=`url(../assests/1to13/images/${arrayImages[i]})`
}
else{
    document.getElementById("header").style.backgroundImage=`url(../assests/1to13/images/${arrayImages[i]})` 
    i++;
}
 var time=setTimeout(header,2000);
}
function right(){
  i++;
  if(i>arrayImages.length-1)
  {
    i=0;
    document.getElementById("header").style.backgroundImage=`url(../assests/1to13/images/${arrayImages[i]})`
  }
  else{
    document.getElementById("header").style.backgroundImage=`url(../assests/1to13/images/${arrayImages[i]})`
  }
}
function left()
{
  i--;
  if(i<0)
  {
    i=arrayImages.length-1;
    document.getElementById("header").style.backgroundImage=`url(../assests/1to13/images/${arrayImages[i]})`
  }
  else{
    document.getElementById("header").style.backgroundImage=`url(../assests/1to13/images/${arrayImages[i]})`
  } 
}

// this is gallery code

var img=document.getElementsByClassName("images");
console.log(img)
for(i=0;i<img.length-1;i++)
{
  //  img[i].src=`../assests/1to13/images/${i} `  
 // img[i].src=`../../JAVA SCRIPT/images/${i}.jpeg`
  //img[i].src=`../assests/1to13/images/${i}.jpeg`
  
}
function closeTheImage()
{
  document.getElementById("bigImage").setAttribute("style","display:none")
}
function openTheImage(img)
{
 // console.log(img)
  document.getElementById("bigimg").setAttribute("src",`../assests/1to13/images/${img}.jpeg`)
  document.getElementById("bigImage").removeAttribute("style");
}