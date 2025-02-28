

var myNodeflist = document.getElementsByTagName("UL");
for (var ids = 0; ids < myNodeflist.length; ids++) {
var myNodelist = myNodeflist[ids].getElementsByTagName("LI");
var is;
  
function myNodeflist_od(is,mm){    myNodelist[is].getElementsByTagName(mm)[0].click();   }  
  
for (is = 0; is < myNodelist.length; is++) {
if(myNodelist[is].classList=="link"){
 if(myNodelist[is].getElementsByTagName("a")[0]){     myNodelist[is].style.cursor = "pointer";  myNodelist[is].onclick = function(){  myNodeflist_od(is, "a");  };   } 
}
else if(myNodelist[is].classList=="cbtn"){
 if(myNodelist[is].getElementsByTagName("button")[0]){     myNodelist[is].style.cursor = "pointer";  myNodelist[is].onclick = function(){  myNodeflist_od(is, "button");  };   } 
}
  
}
}



