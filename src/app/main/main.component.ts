import { Component, OnInit ,HostListener} from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import SweetScroll from 'sweet-scroll';

declare var require: any;
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    let pageState=1;
    let scrollOn=true;
    let that=this;
    $("div").on('wheel', function (e) {
      var documentScrollLeft = $(document).scrollLeft();
      if (documentScrollLeft) {
        console.log('scroll left');
    }
      if (e.originalEvent.deltaY < 0) {
        if(scrollOn===true){
          scrollOn=false;
          console.log("Scroll up");
          if(pageState===1){
            pageState=5;
          }
          else{
            pageState--;
          }
          that.changePage(pageState);
          setTimeout(function(){ scrollOn=true; }, 1500);
        }




      } else {
        if(scrollOn===true){
          scrollOn=false;
          console.log("Scroll down");
          if(pageState===5){
            pageState=1;
          }
          else{
            pageState++;
          }
          that.changePage(pageState);
          setTimeout(function(){ scrollOn=true; }, 1500);
        }
      }
    });
  }






/*ANIMATIONS*/
  ngAfterContentInit(){
    this.moveBonsai();
    this.moveHeader();
  }

  public moveBonsai(){
    $("#main-backgound-image-1").animate({
      bottom: "0px",
    }, 1000);
  }
  public moveHeader(){
    $("#main-header h1").animate({
      top: "320px",
    }, 1000);
  }




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
   }, 1000);

   /*ABOUT*/
   $("#about").animate({
    left: "100%",
   // backgroundPosition:"bottom"
   }, 2000);
   $("#about").animate({
    opacity: "1",
   }, 100);
   $("#about-inner").animate({
    height: "0%",
    top:"0%"
   }, 2000);

   /*WORK*/
   $("#work").hide();
   $("#work").animate({
    top: "-100%",
   // backgroundPosition:"bottom"
   }, 1000);

   /*MAP*/
   $("#map").animate({
    top: "100%",
    opacity:"0"
  }, 1000);

  /*MENU HIGHLIGHT*/
   $("#main-menu-line-1").animate({
    opacity:"0",
  }, 1000);
  $("#main-menu-line-2").animate({
   opacity:"0",
 }, 1000);
 $("#main-menu-line-4").animate({
   opacity:"0",
 }, 1000);
 $("#main-menu-line-3").animate({
  opacity:"0",
}, 1000);
  }
  else if(pageState===2){
   /*MAIN*/
   $("#main-inner").animate({
    opacity: "0",
   }, 1000);

  /*CONTACT*/
  $("#contact").hide();
  $("#contact").animate({
   left:"100%",
 }, 1000);

    /*WORK*/
     $("#work").hide();
     $("#work").animate({
      top: "-100%",
     // backgroundPosition:"bottom"
     }, 1000);

        /*ABOUT*/
     $("#about").animate({
      left: "0%",
      opacity:"1"
     // backgroundPosition:"bottom"
     }, 2000);
     $("#about-inner").animate({
      height: "55%",
      top:"65%"
     }, 2000);

     /*MAP*/
   $("#map").animate({
    top: "100%",
    opacity:"0"
  }, 1000);

    /*MENU HIGHLIGHT*/
     $("#main-menu-line-1").animate({
       opacity:"1",
     }, 1000);
     $("#main-menu-line-2").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-4").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-3").animate({
      opacity:"0",
    }, 1000);

  }
  else if(pageState===3){
     /*MAIN*/
     $("#main-inner").animate({
      opacity: "0",
     }, 1000);

       /*CONTACT*/
    $("#contact").hide();
    $("#contact").animate({
     left:"100%",
   }, 1000);


    $("#map").hide();
       /*ABOUT*/
   $("#about").animate({
    left: "100%",
   // backgroundPosition:"bottom"
   }, 2000);
   $("#about").animate({
    opacity: "1",
   }, 100);
   $("#about-inner").animate({
    height: "0%",
    top:"0%"
   }, 2000);

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
  }, 1000);

     /*MENU HIGHLIGHT*/
     $("#main-menu-line-1").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-2").animate({
      opacity:"1",
    }, 1000);
    $("#main-menu-line-3").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-4").animate({
      opacity:"0",
    }, 1000);
  }
  else if(pageState===4){
     /*MAIN*/
     $("#main-inner").animate({
      opacity: "0",
     }, 1000);

    /*CONTACT*/
    $("#contact").hide();
    $("#contact").animate({
    left:"100%",
  }, 1000);


     /*ABOUT*/
     $("#about").animate({
      left: "100%",
     // backgroundPosition:"bottom"
     }, 2000);
     $("#about").animate({
      opacity: "1",
     }, 100);
     $("#about-inner").animate({
      height: "0%",
      top:"0%"
     }, 2000);

     /*WORK*/
     $("#work").hide();
     $("#work").animate({
      top: "-100%",
     // backgroundPosition:"bottom"
     }, 1000);


     /*MAP*/
   $("#map").animate({
    top: "0%",
    opacity:"1"
  }, 1000);




    /*MENU HIGHLIGHT*/
     $("#main-menu-line-2").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-3").animate({
      opacity:"1",
    }, 1000);
    $("#main-menu-line-4").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-1").animate({
      opacity:"0",
    }, 1000);

  }
  else {
    /*MAIN*/
    $("#main-inner").animate({
      opacity: "0",
     }, 1000);

    /*CONTACT*/
     $("#contact").show();
     $("#contact").animate({
      left:"0%",
    }, 1000);

       /*ABOUT*/
   $("#about").animate({
    left: "100%",
   // backgroundPosition:"bottom"
   }, 2000);
   $("#about").animate({
    opacity: "1",
   }, 100);
   $("#about-inner").animate({
    height: "0%",
    top:"0%"
   }, 2000);

   /*WORK*/
   $("#work").hide();
   $("#work").animate({
    top: "-100%",
   // backgroundPosition:"bottom"
   }, 1000);


    /*MAP*/
    $("#map").animate({
      top: "100%",
      opacity:"0"
    }, 1000);



    /*MENU HIGHLIGHT*/
     $("#main-menu-line-3").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-4").animate({
      opacity:"1",
    }, 1000);
    $("#main-menu-line-1").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-2").animate({
      opacity:"0",
    }, 1000);

  }
}
/*MENU*/

  public crossout(i){
    //$("#main-menu-line-"+i).hide();
    $("#main-menu-line-"+i).animate({
      opacity: "0",
     }, 100);

  }
  public cross(i){
    console.log(i);
   // $("#main-menu-line-"+i).show();
      $("#main-menu-line-"+i).animate({
       opacity: "1",
      }, 100);

  }









}
