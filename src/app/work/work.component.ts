import { Component, OnInit } from '@angular/core';
declare var require: any;
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  zoom(x){
    //$("#img-"+x).an
    $("#img-"+x).attr("class","img-grid");
/*
    $("#img-"+x).animate({
      transform: "scale(3)",
      height:"90vh",
      marginLeft: "30vw",
      position:"absolute",
      zIndex:"4"
    }, 100);*/

  }
  unzoom(x){
    $("#img-"+x).removeClass("img-grid");

 /*   //$("#img-"+x).an
    $("#img-"+x).animate({
      transform: "scale(1)",
      height:"100%",
      marginLeft: "",
      position:"relative",
      zIndex:"4"
    }, 100);
*/
  }
}
