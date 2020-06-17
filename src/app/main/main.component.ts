import { Component, OnInit } from '@angular/core';
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
    $("#main-menu-li-"+i).animate({
      fontSize: "25",
    }, 100);
  }
  public cross(i){
    $("#main-menu-line-"+i).show();
      $("#main-menu-line-"+i).animate({
        marginLeft: "+=50",
      }, 100);
      $("#main-menu-li-"+i).animate({
        fontSize: "27",
      }, 100);
  }

  public scrollUp(){
    const scroller = new SweetScroll();

    scroller.to('#main-menu');
  }
}
