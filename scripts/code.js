
function mylangs() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
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






 var changedark = document.getElementById("btndk");
  if(changedark){  
setmode_chanhe(changedark,"no");
if (localStorage.getItem("ldark")=="yes"){  
  setmode_chanhe(changedark,"yes");
}
}




 var playev = document.getElementById("preview_pls");
  if(playev){  
  var playdev = playev.getElementById("oframepreview_pls");
  if(playdev){   playdev.oncontextmenu=function(e){  e.preventDefault();   return false;  };
  }
playev.oncontextmenu=function(e){  e.preventDefault();   return false;  };
}




