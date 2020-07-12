import { AnimationsService } from './../services/animations.service';
import { Component, OnInit ,HostListener} from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import SweetScroll from 'sweet-scroll';
import { LanguageService } from './../services/language.service';
declare var require: any;
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  first_click = true;
  constructor(private languageService:LanguageService,private animationsService:AnimationsService) {

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
      paddingTop: "35vh",
    }, 1000);
  /*  $("#main-logo").animate({
      top: "1%",
      left: "1%",
    }, 3000);*/



  }

  /*LANGUAGE */
public changeLng(){
  this.languageService.changeLang();
}

  /*ANIMATIONS */
  public changePage(x){
    this.animationsService.changePage(x);
  }


/*MENU HIGHLIGHT LINES*/

  public crossout(i){
    //$("#main-menu-line-"+i).hide();
    $("#main-menu-line-"+i).animate({
      opacity: "0",
     }, 100);

  }
  public cross(i){
   // console.log(i);
   // $("#main-menu-line-"+i).show();
      $("#main-menu-line-"+i).animate({
       opacity: "1",
      }, 100);

  }

  menuMobile(){
    if(this.first_click){
      console.log("hm")
      $(".container").addClass("change");
      $("#main-menu-mobile-inner").show();
      $("#main-menu-mobile-inner").animate({
        width:"100%"
      },100);
      this.first_click=false;
    }
    else if(!this.first_click){
      console.log("hm")
      $(".container").removeClass("change");
      $("#main-menu-mobile-inner").hide();
      $("#main-menu-mobile-inner").animate({
        width:"100%"
      },100);
      this.first_click=true;
    }





}



}
