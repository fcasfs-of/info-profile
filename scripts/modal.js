
function closemofl() {       var momocsifipsl = document.getElementById("custimmdf");  momocsifipsl.innerHTML = "";      
 document.body.style.overflow="auto";
  }
function copenemofl(dsds,dsdds,mm,ll) {       var momocsifipsl = document.getElementById("custimmdf");  momocsifipsl.innerHTML = "";    if(dsdds && dsdds!="" && dsds && dsds!=""){ momocsifipsl.innerHTML = ' <div class="modal" style="display:block;color:#000;">  <span class="bngd">  <span style="margin-left:4px;" class="ssclose" onclick="'+dsdds+'closemofl();" data-tooltip="'+mm+'" data-flow="left"><span class="icon"></span></span></span>       <div style="overflow:auto;" class="modal-content" id="imdsdsfg01">'+dsds+'</div><br/><br/></div>';   
           if(ll && ll=="yes") {  document.body.style.overflow="hidden";  }                                                                                                                                                                  
                                       }
  }




function dmodal(dsds,dsdds,mm,kk,pp) {
    if(dsdds && dsdds!="" && dsds && dsds!=""){
copenemofl(`<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;" class="">${dsds}</h1>  <div style="text-align:center;  color:#fff; "><br/>${dsdds}</div><br/><br/><br/>`,"  ",mm,pp); 
}   }


function cmodal(dsds,dsdds,mm,kk,pp) {
    if(dsdds && dsdds!="" && dsds && dsds!=""){
copenemofl(`<h1 style="text-align:center;pointer-events:none;color:#fff;font-weight:bold;" class="">${dsds}</h1>  <div style="text-align:center;  color:#fff; "><br/><iframe allow="accelerometer *; ambient-light-sensor *; autoplay *; camera *; clipboard-read *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; screen-wake-lock *; speaker *; sync-xhr *; usb *; web-share *; vibrate *; vr *" sandbox="allow-downloads allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-storage-access-by-user-activation"  frameborder="0" allowfullscreen src="${dsdds}" style="width:100%; height:${Number(kk)}px;"></iframe></div><br/><br/><br/>`,"  ",mm,pp); 
}   }





