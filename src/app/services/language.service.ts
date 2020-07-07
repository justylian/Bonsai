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

      $('#language').text('EN');
      /*ΗΟΜΕ PAGE*/
      $("#main-menu-li-1").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Το Ανθοπωλείο'
      $("#main-menu-li-2").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Δημιουργίες'
      $("#main-menu-li-3").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Τοποθεσία'
      $("#main-menu-li-4").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Επικοινωνία'
      //$('#main-menu-li-1').text('Το Ανθοπωλείο');
      $('#main-menu ul').animate({
        left: "30%"
      },0);
      $('#main-header h4').text('To Bonsai είναι ένα ανθοπωλείο στις Βρύσες Αποκορώνου. Από το 1992 που ξεκινήσαμε τη λειτουργία μας συνεχίζουμε να παρέχουμε φρέσκα άνθη, φυτά και ξεχωριστές δημιουργίες για κάθε ιδιαίτερη στιγμή σας!');
      /*OUR STORY*/



      this.langState="el";
    }
    else{
      $('#language').text('EL');
      this.langState="en";
    }
  }
}
