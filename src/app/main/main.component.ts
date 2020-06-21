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
  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    //console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
    gotoTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

  constructor() {

   }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const sweetScroll = new SweetScroll({
        duration: 2000,                 // Specifies animation duration in integer
        easing: 'easeInQuad'
       });
    }, false);



  }
  public crossout(i){
    $("#main-menu-line-"+i).hide();
    $("#main-menu-line-"+i).animate({
      marginLeft: "-=50",
    }, 100);

  }
  public cross(i){
    $("#main-menu-line-"+i).show();
      $("#main-menu-line-"+i).animate({
        marginLeft: "+=50",
      }, 100);

  }









}
