

var myNodeflist = document.getElementsByTagName("UL");
for (var ids = 0; ids < myNodeflist.length; ids++) {
var myNodelist = myNodeflist[ids].getElementsByTagName("LI");
var is;
  
function myNodeflist_od(is){    myNodelist[is].getElementsByTagName("a")[0].click;   }  
  
for (is = 0; is < myNodelist.length; is++) {
if(myNodelist[is].classList=="link"){
 if(myNodelist[is].getElementsByTagName("a")[0]){     myNodelist[is].style.cursor = "pointer";  myNodelist[is].onclick = myNodeflist_od(is);   } 
}
}
}



