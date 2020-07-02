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
      $('#main-menu-li-1').text('Το Ανθοπωλείο');
      $('#main-menu-li-2').text('');
      $('#main-menu-li-3').text('Τοποθεσία');
      $('#main-menu-li-4').text('Επικοινωνία');

      this.langState="el";
    }
    else{
      $('#language').text('EL');
      this.langState="en";
    }
  }
}
