let btn = document.querySelector(".darkmode");


let htr_list= document.querySelector(".navbar__ul");

let menu_lifnks = document.getElementsByClassName("zlink");
let menu_links = htr_list.getElementsByClassName("link");
 for (id = 0; id < menu_links.length; id++) {
   if(menu_links[id].getElementsByTagName("a")[0]){
    tabcontent[id].style.cursor = "pointer";
tabcontent[id].addEventListener("click", function(){   menu_links[id].getElementsByTagName("a")[0].click();    });
   }
  }
for (idd = 0; idd < menu_lifnks.length; idd++) {
   if(menu_lifnks[idd].getElementsByTagName("a")[0]){
    menu_lifnks[idd].style.cursor = "pointer";
menu_lifnks[idd].addEventListener("click", function(){   menu_lifnks[idd].getElementsByTagName("a")[0].click();    });
   }
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

