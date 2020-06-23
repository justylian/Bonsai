import { Component, OnInit } from '@angular/core';
import imagesjson from "../../assets/json/images.json";

declare var require: any;
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  imagesjson=imagesjson;
  imgCount;
  constructor() { }

  ngOnInit() {
    this.imgCount=135;
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
  }

  filter(x){
    //console.log(x)
    if(x!=="All"){
      for(var i=1;i<=6;i++){
        var alt=$("#img-"+i).attr("alt").toUpperCase();
        //console.log(alt)
        if(!alt.includes(x.toUpperCase())){
          $("#img-"+i).hide();
          //console.log(i)
        }
        if(alt.includes(x.toUpperCase())){
          $("#img-"+i).show();
          //console.log(i)
        }
      }
    }
    else{
      for(var i=1;i<=6;i++){
          $("#img-"+i).show();
        }
      }

  }
  changeImages(){
    console.log(this.imgCount)
    if(this.imgCount<=135){
      console.log(this.imgCount)
      for(var i=1;i<=6;i++){
        console.log(this.imgCount+".jpg")
        $("#img-src-"+i).hide();
        $("#img-src-"+i).attr("src", "../../assets/images/gallery/"+this.imgCount+".jpg");
        $("#img-src-"+i).show();

        this.imgCount=this.imgCount-1;
      }

    }

  }
}
