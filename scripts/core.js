
function getUrlParameter(sParam) {  var dgetUrlParameterd="";

    var sPageURL = decodeURIComponent(location.href);//window.location.search.substring(1));

    var sURLVariables = sPageURL.split('?')[1].split('&');

    for (var i = 0; i < sURLVariables.length; i++) {

        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam) {

            dgetUrlParameterd=sParameterName[1];

        }

    }

return decodeURI(dgetUrlParameterd).replaceAll("+"," ");  }




function mchangelag(nn) {
if(nn){  location.href=nn;  }
}



  function mode_chanhe(btn) {
  if (btn.innerHTML === `<i class="fas fa-moon"></i>`) {
    btn.innerHTML = `<i class="fas fa-sun"></i>`;
    btn.style.color = "#000";
    btn.style.backgroundColor = "#fff";
    localStorage.setItem("ldark", "yes");
    document.body.classList.add("darkmode");
  } else {
    btn.innerHTML = `<i class="fas fa-moon"></i>`;
   btn.style.color = "orange";
    btn.style.backgroundColor = "#111";
    localStorage.removeItem("ldark");
    document.body.classList.remove("darkmode");
  }
}


function setmode_chanhe(btn,nn) {
  if (nn === "yes") {
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





function closemofl() {       var momocsifipsl = document.getElementById("custimmdf");  momocsifipsl.innerHTML = "";       }
function copenemofl(dsds,dsdds) {       var momocsifipsl = document.getElementById("custimmdf");  momocsifipsl.innerHTML = "";    if(dsdds && dsdds!="" && dsds && dsds!=""){ momocsifipsl.innerHTML = ' <div class="modal" style="display:block;color:#000;">  <span class="bngd">  <span style="margin-left:4px;" class="ssclose" onclick="'+dsdds+'closemofl();" data-tooltip="Close" data-flow="left">x</span></span>       <div style="overflow:auto;" class="modal-content" id="imdsdsfg01">'+dsds+'</div><br/><br/></div>';     }
  }







