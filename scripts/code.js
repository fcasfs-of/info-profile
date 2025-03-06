

if (localStorage.getItem("ldark")=="yes"){  
  var changedark = document.getElementsById("btndk");
  if(changedark){   changedark.click();  }
}




var myNodeflist = document.getElementsByTagName("UL");
for (var ids = 0; ids < myNodeflist.length; ids++) {
var myNodelist = myNodeflist[ids].getElementsByTagName("LI");
var is;
  
  
for (is = 0; is < myNodelist.length; is++) {
  
if(myNodelist[is].classList=="link"){
 if(myNodelist[is].getElementsByTagName("a")[0]){     myNodelist[is].style.cursor = "pointer";  myNodelist[is].onclick = function(){    this.getElementsByTagName("a")[0].click();   };   } 
}
  
else if(myNodelist[is].classList=="cbtn"){
 if(myNodelist[is].getElementsByTagName("button")[0]){     myNodelist[is].style.cursor = "pointer";  myNodelist[is].onclick = function(){    this.getElementsByTagName("button")[0].click();   };   } 
}
  
else if(myNodelist[is].classList=="zlink"){
 if(myNodelist[is].getElementsByTagName("a")[0]){     myNodelist[is].style.cursor = "pointer";  myNodelist[is].onclick = function(){    this.getElementsByTagName("a")[0].click();   };   } 
}
  
}
}





