  function mode_chanhe(btn) {
  if (btn.innerHTML === `<i class="fas fa-moon"></i>`) {
    btn.innerHTML = `<i class="fas fa-sun"></i>`;
    btn.style.color = "#000";
    btn.style.backgroundColor = "#fff";
    document.body.classList.add("darkmode");
  } else {
    btn.innerHTML = `<i class="fas fa-moon"></i>`;
   btn.style.color = "orange";
    btn.style.backgroundColor = "#111";
    document.body.classList.remove("darkmode");
  }
}



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



