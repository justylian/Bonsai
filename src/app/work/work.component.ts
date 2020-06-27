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
  imagesBasic = [
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', description: 'Image 1' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', description: 'Image 2' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', description: 'Image 3' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', description: 'Image 4' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', description: 'Image 5' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', description: 'Image 6' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', description: 'Image 7' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', description: 'Image 8' },
    { img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', thumb:
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', description: 'Image 9' }
    ];
  constructor() {}

  ngOnInit() {
    $(function () {
      $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
      });



    this.imgCount=this.imagesjson.length;
    for(var j=0;j<6;j++){
      this.tag[j+1]=this.imagesjson[j].tag;
      this.url[j+1]=this.imagesjson[j].url;
    }
  }

  zoom(x){
    //$("#img-"+x).an
    if(this.zoomed){
      //$("#img-"+x).removeClass("img-grid");
      $("#img-prime").attr("src", "../../assets/images/gallery/"+x+".jpg");
      $("#img-prime").animate({
        opacity:"1",
        zIndex:"5"
      }, 100);
      this.zoomed=false;
    }
    else{
      //$("#img-"+x).attr("class","img-grid");
      $("#img-prime").animate({
        opacity:"0",
        zIndex:"1"

      }, 100);
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



  filter(x){
    //console.log(x)
    this.state=x;
    if(x!=="All"){
      for(var i=1;i<=6;i++){

        var alt=this.tag[i].toUpperCase();
        console.log(alt)
        if(!alt.includes(x.toUpperCase())){
          //$("#img-"+i).hide();
          this.changeImages();
          //console.log(i)
        }
        if(alt.includes(x.toUpperCase())){
          //$("#img-"+i).show();
          this.changeImages();
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



public changeImages(){
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
