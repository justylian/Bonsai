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
      $("#main-menu-li-0").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Αρχική'
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
        left: "24%"
      },0);
      $('#main-header h4').text('To Bonsai είναι ένα ανθοπωλείο στις Βρύσες Αποκορώνου. Από το 1992 που ξεκινήσαμε τη λειτουργία μας συνεχίζουμε να παρέχουμε φρέσκα άνθη, φυτά και ξεχωριστές δημιουργίες για κάθε ιδιαίτερη στιγμή σας!');

      /*OUR STORY*/
      $('.about-text h2').text('Η Ιστορία μας');
      $('#about-description').text('Ξεκινώντας το 1992, δημιουργήσαμε το ανθοπωλείο, πρώτο στο είδος του στην περιοχή. Συνεχίζουμε να παρέχουμε για τις ανάγκες του πελάτη φρέσκα και υψηλής ποιότητας άνθη και φυτά. Με περισσότερα απο 25 χρόνια εμπειρίας ομορφαίνωντας τις ιδιαίτερες στιγμές σας με στολισμούς που μένουν αξέχαστοι.Αφήστε τις ημέρες που ονειρεύεστε να πραγματοποιηθούν με τον πιο δημιουργικό τρόπο!');
      /*MAP*/
      $('#work h2').text('Δημιουργίες');
      $('#work-list-1').text('Όλα');
      $('#work-list-2').text('Γάμοι');
      $('#work-list-3').text('Βαφτίσεις');

    /*MAP*/
    $('#map h2').text('Τοποθεσία');
    $('#map h4').html('Κεντρική Πλατεία<br> Βρύσες Αποκορώνου<br> Χανιά<br> 73007');

    /*CONTACT*/
    $('#contact h2').text('Επικοινωνία');
    $('#fname-label').text('Όνομα');
    $('#fname').attr("placeholder", 'Όνομα');

    $('#lname-label').text('Επώνυμο');
    $('#lname').attr("placeholder", "Επώνυμο");

    $('#message').text('Μήνυμα');
    $('#subject').attr("placeholder",'Μήνυμα');

    $('#submit').attr("value", "Αποστολή");





      this.langState="el";
    }
    else{
      $('#language').text('EL');
      this.langState="en";
    }
  }
}
