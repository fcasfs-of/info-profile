
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
function copenemofl(dsds,dsdds,mm) {       var momocsifipsl = document.getElementById("custimmdf");  momocsifipsl.innerHTML = "";    if(dsdds && dsdds!="" && dsds && dsds!=""){ momocsifipsl.innerHTML = ' <div class="modal" style="display:block;color:#000;">  <span class="bngd">  <span style="margin-left:4px;" class="ssclose" onclick="'+dsdds+'closemofl();" data-tooltip="'+mm+'" data-flow="left">x</span></span>       <div style="overflow:auto;" class="modal-content" id="imdsdsfg01">'+dsds+'</div><br/><br/></div>';     }
  }




function cmodal(dsds,dsdds,mm) {
    if(dsdds && dsdds!="" && dsds && dsds!=""){
copenemofl(`<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;" class="">${dsds}<h1><br/><br/><div style="text-align:center; "><iframe allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation"  frameborder="0" allowfullscreen src="${dsdds}" style="width:100%; height:340px;"></iframe></div><br/><br/><br/>`,"  ",mm); 
}   }





