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
  zoomed=false;
  state="All";
  tag =new Array<String>();
  url=new Array<String>();

  constructor() { }

  ngOnInit() {
    this.imgCount=this.imagesjson.length;
    for(var j=0;j<6;j++){
      this.tag[j+1]=this.imagesjson[j].tag;
      this.url[j+1]=this.imagesjson[j].url;

    }

  }

  zoom(x){
    //$("#img-"+x).an
    if(this.zoomed){
      $("#img-"+x).removeClass("img-grid");
      this.zoomed=false;
    }
    else{
      $("#img-"+x).attr("class","img-grid");
      this.zoomed=true;
    }
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
  }

  filter(x){
    //console.log(x)
    this.state=x;
    if(x!=="All"){
      for(var i=1;i<=6;i++){

        var alt=this.tag[i].toUpperCase();
        console.log(alt)
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
    var imgArray=this.imagesjson.length;
    console.log(imgArray)
    if(this.imgCount<=imgArray){
      console.log(this.imgCount)
      for(var i=1;i<=6;i++){
        //console.log(this.imagesjson[--this.imgCount].url)
        //$("#img-src-"+i).hide();

        if(this.state==="All"){
          console.log("IN ALL");
          this.imgCount--;
          if(this.imgCount<=0){
            this.imgCount=imgArray;
          }

          this.tag[i]=this.imagesjson[this.imgCount].tag;
          this.url[i]=this.imagesjson[this.imgCount].url;
          $("#img-src-"+i).attr("src", this.url[i]);

          //this.imgCount--;
          if(this.imgCount<=0){
            this.imgCount=imgArray;
          }
        }
        else if(this.imagesjson[this.imgCount-1].tag.toUpperCase().includes(this.state.toUpperCase())){


          console.log(this.state.toUpperCase());
          console.log("IN INCLUDES"+i);
          console.log(this.imgCount);
          this.imgCount--;
          if(this.imgCount<=0){
            this.imgCount=imgArray;
          }          console.log(this.imgCount);

          this.tag[i]=this.imagesjson[this.imgCount].tag;
          this.url[i]=this.imagesjson[this.imgCount].url;
          $("#img-src-"+i).attr("src", this.url[i]);

          console.log(this.imgCount);
          //this.imgCount--;
          if(this.imgCount<=0){
            this.imgCount=imgArray;
          }
        }
        else{
          while(true){
            console.log("DO NOT INCLUD")
            if(this.imagesjson[--this.imgCount].tag.toUpperCase().includes(this.state.toUpperCase())){
              console.log("BREAK ICLUDE")
              //this.imgCount--;
              if(this.imgCount<=0){
                this.imgCount=imgArray;
                break;
              }

              console.log( this.imagesjson[this.imgCount].tag)
              console.log(this.state.toUpperCase());

              this.tag[i]=this.imagesjson[this.imgCount].tag;
              this.url[i]=this.imagesjson[this.imgCount].url;
              $("#img-src-"+i).attr("src", this.url[i]);
              $("#img-src-"+i).show();
              break;
            }
            //this.imgCount--;
            if(this.imgCount<=0){
              this.imgCount=imgArray;
            }
          }


          this.imgCount--;
          if(this.imgCount<=0){
            this.imgCount=imgArray;
          }
        }



      }

    }

  }
}
