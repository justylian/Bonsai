import { Injectable, ɵConsole } from '@angular/core';
declare var require: any;
declare var $: any;
declare var jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langState="en";
  constructor() { }
  public changeLang(){
    if(this.langState==="en"){
      console.log("SVD");
      $('#language').text('EN');
      this.langState="el";
    }
    else{
      $('#language').text('EL');
      this.langState="en";
    }
  }
}
