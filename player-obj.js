function crete_objplayer(){
var fplayeri = fs_Playerjs({ OSD:true, config:{            
}, id:"preview_pls",  customtext:{age:"1"}, nocontrols:0, autoplay:0, loop:0, title:"Intro", file:"intro1.mp4", poster:"https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.jpg", player:1,"url":location.href  });    
 
 fplayeri.OnEvents("init",function(){    
      fplayeri.OnEvents("volume",function(){    fs_OSD({ duration:3e3, position:"absolute", text: 'Volume: '+Math.floor(fplayeri.api("volume")*100)+"%", pos: "top-left", showAction: false,  actionText: "", width: 'auto'    });     });
      fplayeri.OnEvents("speed",function(){    fs_OSD({ duration:3e3, position:"absolute", text: 'Velocidade: '+fplayeri.api("speed"), pos: "top-left", showAction: false,  actionText: "", width: 'auto'    });     });     
 });
       
 fplayeri.OnEvents("exitfullscreen",function(){     fs_OSD({ duration:3e3, position:"absolute", text: 'Saindo da Tela Cheia', pos: "top-left", showAction: false,  actionText: "", width: 'auto'    });     });
fplayeri.OnEvents("fullscreen",function(){      fs_OSD({ duration:3e3, position:"absolute", text: 'Tela Cheia', pos: "top-left", showAction: false,  actionText: "", width: 'auto'    });      });
   fplayeri.OnEvents("unmute",function(){      fs_OSD({ duration:3e3, text: 'Som Ativo', position:"absolute", pos: "top-left", showAction: false,  actionText: "", width: 'auto'    });      });
  fplayeri.OnEvents("mute",function(){     fs_OSD({ duration:3e3, text: 'Mutado', position:"absolute", pos: "top-left", showAction: false,  actionText: "", width: 'auto'    });      });
}

