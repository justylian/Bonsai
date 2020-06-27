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
  console.log("changingpage");
  if(pageState===1){

  }
  else if(pageState===2){
    $("#main-inner").animate({
      opacity: "0",
     }, 100);
     $("#about").animate({
      left: "0%",
     // backgroundPosition:"bottom"
     }, 2000);
     $("#about-inner").animate({
      height: "55%",
      top:"65%"
     }, 2000);
     $("#main-menu-line-1").animate({
       opacity:"1",
     }, 1000);

  }
  else if(pageState===3){
    $("#about").animate({
      opacity: "0",
     }, 100);
     $("#work").animate({
      top: "0%",
     // backgroundPosition:"bottom"
     }, 1000);
     $("#main-menu-line-1").animate({
      opacity:"0",
    }, 1000);
    $("#main-menu-line-2").animate({
      opacity:"1",
    }, 1000);
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
