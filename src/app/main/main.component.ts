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

      if (e.originalEvent.deltaY < 0) {
        if(scrollOn===true){
          scrollOn=false;
          console.log("Scroll up");
          if(pageState===1){
            pageState=4;
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
          if(pageState===4){
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
  if(pageState===1){

  }
  else if(pageState===2){
    $("#main-inner").animate({
      opacity: "0",
     }, 100);
     $("#about").animate({
      left: "0%",
     }, 300);
     $("#about-inner").animate({
      height: "55%",
     }, 2000);
     $("#main-menu-line-1").animate({
       opacity:"1",
      height: "500px",
      background:"white",
     }, 1000);
     $("#main-menu-line-2").animate({
     height: "500px",
    }, 0);
    $("#main-menu-line-3").animate({
      height: "500px",
     }, 0);
     $("#main-menu-line-4").animate({
      height: "500px",
     }, 0);
  }
  else if(pageState===3){
  }
  else{

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
