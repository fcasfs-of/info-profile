let btn = document.querySelector(".cbtn > .darkmode");


let myNodelist = document.getElementsByTagName("LI");
var is;
for (is = 0; is < myNodelist.length; is++) {
 
if(myNodelist[is].classList=="link"){
 if(myNodelist[is].getElementsByTagName("a")[0]){    myNodelist[is].style.cursor = "pointer";  myNodelist[is].onclick = function(){   myNodelist[is].getElementsByTagName("a")[0].click();    };   } 
}
 
}
//for (idd = 0; idd < menu_lifnks.length; idd++) {  
 }


btn.addEventListener("click", () => {
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
});

