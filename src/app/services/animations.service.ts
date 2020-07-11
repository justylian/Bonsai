import { Injectable } from '@angular/core';
declare var require: any;
declare var $: any;
declare var jQuery: any;
@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }



  /*SCROLL PAGES*/

public changePage(pageState){
  console.log("changingpage");
  if(pageState===1){
    /*MAIN*/
    $("#main-inner").animate({
      opacity: "1",
     }, 1000);


     /*CONTACT*/
    $("#contact").hide();
    $("#contact").animate({
     left:"100%",
   }, 500);

   /*ABOUT*/
   $("#about").animate({
    left: "100%",
   // backgroundPosition:"bottom"
   }, 200);
   $("#about").animate({
    opacity: "1",
   }, 100);
   $("#about-inner").animate({
    height: "0%",
    top:"0%"
   }, 200);

   /*WORK*/
   $("#work").hide();
   $("#work").animate({
    top: "-100%",
   // backgroundPosition:"bottom"
   }, 500);

   /*MAP*/
   $("#map").animate({
    top: "100%",
    opacity:"0"
  }, 500);

  /*MENU HIGHLIGHT*/
  $("#main-menu-line-0").animate({
    opacity:"1",
  }, 500);
   $("#main-menu-line-1").animate({
    opacity:"0",
  }, 500);
  $("#main-menu-line-2").animate({
   opacity:"0",
 }, 500);
 $("#main-menu-line-4").animate({
   opacity:"0",
 }, 500);
 $("#main-menu-line-3").animate({
  opacity:"0",
}, 500);
  }
  else if(pageState===2){
   /*MAIN*/
   $("#main-inner").animate({
    opacity: "0",
   }, 500);

  /*CONTACT*/
  $("#contact").hide();
  $("#contact").animate({
   left:"100%",
 }, 500);

    /*WORK*/
     $("#work").hide();
     $("#work").animate({
      top: "-100%",
     // backgroundPosition:"bottom"
     }, 500);

        /*ABOUT*/
     $("#about").animate({
      left: "0%",
      opacity:"1"
     // backgroundPosition:"bottom"
     }, 1000);
     $("#about-inner").animate({
      height: "55%",
      top:"50%"
     }, 1000);

     /*MAP*/
   $("#map").animate({
    top: "100%",
    opacity:"0"
  }, 500);

    /*MENU HIGHLIGHT*/
    $("#main-menu-line-0").animate({
      opacity:"0",
    }, 500);
     $("#main-menu-line-1").animate({
       opacity:"1",
     }, 500);
     $("#main-menu-line-2").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-4").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-3").animate({
      opacity:"0",
    }, 500);

  }
  else if(pageState===3){
     /*MAIN*/
     $("#main-inner").animate({
      opacity: "0",
     }, 500);

       /*CONTACT*/
    $("#contact").hide();
    $("#contact").animate({
     left:"100%",
   }, 500);


    //$("#map").hide();
       /*ABOUT*/
   $("#about").animate({
    left: "100%",
   // backgroundPosition:"bottom"
   }, 200);
   $("#about").animate({
    opacity: "1",
   }, 100);
   $("#about-inner").animate({
    height: "0%",
    top:"0%"
   }, 200);

   /*WORK*/
     $("#work").show();
     $("#work").animate({
      top: "0%",
     // backgroundPosition:"bottom"
     }, 1000);

     /*MAP*/
   $("#map").animate({
    top: "100%",
    opacity:"0"
  }, 500);

     /*MENU HIGHLIGHT*/
     $("#main-menu-line-0").animate({
      opacity:"0",
    }, 500);
     $("#main-menu-line-1").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-2").animate({
      opacity:"1",
    }, 500);
    $("#main-menu-line-3").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-4").animate({
      opacity:"0",
    }, 500);
  }
  else if(pageState===4){
     /*MAIN*/
     $("#main-inner").animate({
      opacity: "0",
     }, 500);

    /*CONTACT*/
    $("#contact").hide();
    $("#contact").animate({
    left:"100%",
  }, 500);


     /*ABOUT*/
     $("#about").animate({
      left: "100%",
     // backgroundPosition:"bottom"
     }, 200);
     $("#about").animate({
      opacity: "1",
     }, 100);
     $("#about-inner").animate({
      height: "0%",
      top:"0%"
     }, 200);

     /*WORK*/
     $("#work").hide();
     $("#work").animate({
      top: "-100%",
     // backgroundPosition:"bottom"
     }, 500);


     /*MAP*/
   $("#map").animate({
    top: "0%",
    opacity:"1"
  }, 1000);




    /*MENU HIGHLIGHT*/
    $("#main-menu-line-0").animate({
      opacity:"0",
    }, 500);
     $("#main-menu-line-2").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-3").animate({
      opacity:"1",
    }, 500);
    $("#main-menu-line-4").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-1").animate({
      opacity:"0",
    }, 500);

  }
  else {
    /*MAIN*/
    $("#main-inner").animate({
      opacity: "0",
     }, 500);

    /*CONTACT*/
     $("#contact").show();
     $("#contact").animate({
      left:"0%",
    }, 1000);

       /*ABOUT*/
   $("#about").animate({
    left: "100%",
   // backgroundPosition:"bottom"
   }, 200);
   $("#about").animate({
    opacity: "1",
   }, 100);
   $("#about-inner").animate({
    height: "0%",
    top:"0%"
   }, 200);

   /*WORK*/
   $("#work").hide();
   $("#work").animate({
    top: "-100%",
   // backgroundPosition:"bottom"
   }, 500);


    /*MAP*/
    $("#map").animate({
      top: "100%",
      opacity:"0"
    }, 500);



    /*MENU HIGHLIGHT*/
    $("#main-menu-line-0").animate({
      opacity:"0",
    }, 500);
     $("#main-menu-line-3").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-4").animate({
      opacity:"1",
    }, 500);
    $("#main-menu-line-1").animate({
      opacity:"0",
    }, 500);
    $("#main-menu-line-2").animate({
      opacity:"0",
    }, 500);

  }
}






}
