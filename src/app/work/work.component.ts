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
  zoomed=true;
  state="All";
  currentSlide;
  tag =new Array<String>();
  url=new Array<String>();

  constructor() {}

  ngOnInit() {
    this.imgCount=this.imagesjson.length;
    for(var j=0;j<6;j++){
      this.tag[j+1]=this.imagesjson[j].tag;
      this.url[j+1]=this.imagesjson[j].url;
    }
  }




  zoom(x){
    //$("#img-"+x).an
    this.currentSlide=x;
    if(this.zoomed){
      console.log("zoom")
      //$("#img-"+x).removeClass("img-grid");

      var src=$("#img-src-"+x).attr('src');
      $("#img-slide").attr("src",src);
      //$("#img-slide").attr("src", "../../assets/images/gallery/"+x+".jpg");

      $(".carousel").show();

      this.zoomed=false;
    }
    else{
      console.log("zoomout")

      //$("#img-"+x).attr("class","img-grid");

      $(".carousel").hide();

      this.zoomed=true;
    }

  }



  /*IMAGES SLIDESHOW MANAGE*/
  prev(){
    if(this.currentSlide==="1" || this.currentSlide===1){
      this.currentSlide=6;
    }
    else{
      this.currentSlide--;
    }
    var src=$("#img-src-"+this.currentSlide).attr('src');

    $("#img-slide").attr("src",src);
    //$("#img-slide").attr("src", "../../assets/images/gallery/"+x+".jpg");
    $("#carousel").animate({
      display:"block",
    }, 100);
    $("#carousel").show();
  }
  next(){
    //$("#img-"+x).an
    console.log(this.currentSlide)

    if(this.currentSlide==="6" || this.currentSlide===6){
      this.currentSlide=1;
    }
    else{
      this.currentSlide++;
    }

    var src=$("#img-src-"+this.currentSlide).attr('src');
    console.log(this.currentSlide)
    $("#img-slide").attr("src",src);
    //$("#img-slide").attr("src", "../../assets/images/gallery/"+x+".jpg");
    $("#carousel").animate({
      display:"block",
    }, 100);
    $("#carousel").show();


  }




  /*IMAGES FILTERS*/

  filter(x){
    this.state=x;
    //console.log(x)
    this.toggle(x);
    if(x!=="All"){
      for(var i=1;i<=6;i++){
        console.log(x,i)
        this.changeImagesNext();
      }
    }
    else{
      for(var i=1;i<=6;i++){
          $("#img-"+i).show();
        }
      }
  }




    /*IMAGE CHANGE ON FILTERS*/

public changeImagesNext(){
    var imgArray=this.imagesjson.length;
    //console.log(imgArray)
    if(this.imgCount<=imgArray){
     // console.log(this.imgCount)
      for(var i=1;i<=6;i++){
        //console.log(this.imagesjson[--this.imgCount].url)
        //$("#img-src-"+i).hide();
      //  console.log(this.imgCount);

        if(this.state==="All"){
          console.log("IN ALL");
          this.imgCount--;
          if(this.imgCount<=0){
            this.imgCount=imgArray;
          }
        //  console.log(this.imgCount);

          this.tag[i]=this.imagesjson[this.imgCount].tag;
          this.url[i]=this.imagesjson[this.imgCount].url;
          console.log(this.url[i])

          $("#img-src-"+i).attr("src", this.url[i]);

          //this.imgCount--;
          if(this.imgCount<=0){
            this.imgCount=imgArray;
          }
         // console.log(this.imgCount);

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

  public changeImagesPrev(){
    var imgArray=this.imagesjson.length;
   // console.log(imgArray)
    //console.log(this.imgCount)
    //this.imgCount=this.imgCount-6;
    if(this.imgCount>=1){

      for(var i=1;i<=6;i++){
        //console.log(this.imagesjson[--this.imgCount].url)
        //$("#img-src-"+i).hide();

        if(this.state==="All"){
          console.log("IN ALL");
          this.imgCount++;
          if(this.imgCount>=imgArray){
            this.imgCount=1;
          }
        //  console.log(this.imgCount)
          this.tag[i]=this.imagesjson[this.imgCount].tag;
          this.url[i]=this.imagesjson[this.imgCount].url;
          console.log(this.url[i])

          $("#img-src-"+i).attr("src", this.url[i]);

          //this.imgCount--;
          if(this.imgCount>=imgArray){
            this.imgCount=1;
          }
        }
        else if(this.imagesjson[this.imgCount-1].tag.toUpperCase().includes(this.state.toUpperCase())){
          console.log(this.state.toUpperCase());
          console.log("IN INCLUDES"+i);
          console.log(this.imgCount);
          this.imgCount++;
          if(this.imgCount>=imgArray){
            this.imgCount=1;
          }
          console.log(this.imgCount);

          this.tag[i]=this.imagesjson[this.imgCount].tag;
          this.url[i]=this.imagesjson[this.imgCount].url;

          $("#img-src-"+i).attr("src", this.url[i]);


          console.log(this.imgCount);
          //this.imgCount--;
          if(this.imgCount>=imgArray){
            this.imgCount=1;
          }
        }
        else{
          while(true){
            console.log("DO NOT INCLUD")
            if(this.imagesjson[--this.imgCount].tag.toUpperCase().includes(this.state.toUpperCase())){
              console.log("BREAK ICLUDE")
              //this.imgCount--;
              if(this.imgCount>=imgArray){
                this.imgCount=1;
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
            if(this.imgCount>=imgArray){
              this.imgCount=1;
            }
          }
          this.imgCount++;
          if(this.imgCount>=imgArray){
            this.imgCount=1;
          }

        }
      }
    }
  }

  toggle(x){
    if(x==="Baptism"){
      console.log('ds')
      $("#work-list-2").css("border", "2px solid var(--main-color-1)");
      $("#work-list-3").css("border", "2px solid var(--main-color-2)");
      $("#work-list-3").css("pointer-events", "none");
      $("#work-list-2").css("pointer-events", "auto");
      $("#work-list-4").css("pointer-events", "auto");
      $("#work-list-5").css("pointer-events", "auto");
      $("#work-list-6").css("pointer-events", "auto");
      $("#work-list-1").css("pointer-events", "auto");
      $("#work-list-1").css("border", "2px solid var(--main-color-1)");
      $("#work-list-4").css("border", "2px solid var(--main-color-1)");
      $("#work-list-5").css("border", "2px solid var(--main-color-1)");
      $("#work-list-6").css("border", "2px solid var(--main-color-1)");
    }
    else if(x==="Wedding"){
      $("#work-list-2").css("border", "2px solid var(--main-color-2)");
      $("#work-list-3").css("border", "2px solid var(--main-color-1)");
      $("#work-list-2").css("pointer-events", "none");
      $("#work-list-3").css("pointer-events", "auto");
      $("#work-list-4").css("pointer-events", "auto");
      $("#work-list-5").css("pointer-events", "auto");
      $("#work-list-6").css("pointer-events", "auto");
      $("#work-list-1").css("pointer-events", "auto");
      $("#work-list-1").css("border", "2px solid var(--main-color-1)");
      $("#work-list-4").css("border", "2px solid var(--main-color-1)");
      $("#work-list-5").css("border", "2px solid var(--main-color-1)");
      $("#work-list-6").css("border", "2px solid var(--main-color-1)");
    }
    else if(x==="All"){
      $("#work-list-2").css("border", "2px solid var(--main-color-1)");
      $("#work-list-1").css("border", "2px solid var(--main-color-2)");
      $("#work-list-1").css("pointer-events", "none");
      $("#work-list-2").css("pointer-events", "auto");
      $("#work-list-4").css("pointer-events", "auto");
      $("#work-list-5").css("pointer-events", "auto");
      $("#work-list-6").css("pointer-events", "auto");
      $("#work-list-3").css("pointer-events", "auto");
      $("#work-list-3").css("border", "2px solid var(--main-color-1)");
      $("#work-list-4").css("border", "2px solid var(--main-color-1)");
      $("#work-list-5").css("border", "2px solid var(--main-color-1)");
      $("#work-list-6").css("border", "2px solid var(--main-color-1)");
    }
    else if(x==="Bouquet"){
      $("#work-list-2").css("border", "2px solid var(--main-color-1)");
      $("#work-list-1").css("border", "2px solid var(--main-color-1)");
      $("#work-list-1").css("pointer-events", "auto");
      $("#work-list-2").css("pointer-events", "auto");
      $("#work-list-4").css("pointer-events", "none");
      $("#work-list-5").css("pointer-events", "auto");
      $("#work-list-6").css("pointer-events", "auto");
      $("#work-list-3").css("pointer-events", "auto");
      $("#work-list-3").css("border", "2px solid var(--main-color-1)");
      $("#work-list-4").css("border", "2px solid var(--main-color-2)");
      $("#work-list-5").css("border", "2px solid var(--main-color-1)");
      $("#work-list-6").css("border", "2px solid var(--main-color-1)");
    }
    else if(x==="Church"){
      $("#work-list-2").css("border", "2px solid var(--main-color-1)");
      $("#work-list-1").css("border", "2px solid var(--main-color-1)");
      $("#work-list-1").css("pointer-events", "auto");
      $("#work-list-2").css("pointer-events", "auto");
      $("#work-list-4").css("pointer-events", "auto");
      $("#work-list-5").css("pointer-events", "none");
      $("#work-list-6").css("pointer-events", "auto");
      $("#work-list-3").css("pointer-events", "auto");
      $("#work-list-3").css("border", "2px solid var(--main-color-1)");
      $("#work-list-4").css("border", "2px solid var(--main-color-1)");
      $("#work-list-5").css("border", "2px solid var(--main-color-2)");
      $("#work-list-6").css("border", "2px solid var(--main-color-1)");
    }
    else if(x==="Memorial"){
      $("#work-list-2").css("border", "2px solid var(--main-color-1)");
      $("#work-list-1").css("border", "2px solid var(--main-color-1)");
      $("#work-list-1").css("pointer-events", "auto");
      $("#work-list-2").css("pointer-events", "auto");
      $("#work-list-4").css("pointer-events", "auto");
      $("#work-list-5").css("pointer-events", "auto");
      $("#work-list-6").css("pointer-events", "none");
      $("#work-list-3").css("pointer-events", "auto");
      $("#work-list-3").css("border", "2px solid var(--main-color-1)");
      $("#work-list-4").css("border", "2px solid var(--main-color-1)");
      $("#work-list-5").css("border", "2px solid var(--main-color-1)");
      $("#work-list-6").css("border", "2px solid var(--main-color-2)");
    }

  }

}
