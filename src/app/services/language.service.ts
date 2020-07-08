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
      $('.about-text h2').text('Η ΙΣΤΟΡΙΑ ΜΑΣ');
      $('#about-description').text('Ξεκινώντας το 1992, δημιουργήσαμε το ανθοπωλείο, πρώτο στο είδος του στην περιοχή. Συνεχίζουμε να παρέχουμε για τις ανάγκες του πελάτη φρέσκα και υψηλής ποιότητας άνθη και φυτά. Με περισσότερα απο 25 χρόνια εμπειρίας ομορφαίνωντας τις ιδιαίτερες στιγμές σας με στολισμούς που μένουν αξέχαστοι.Αφήστε τις ημέρες που ονειρεύεστε να πραγματοποιηθούν με τον πιο δημιουργικό τρόπο!');
      /*MAP*/
      $('#work h2').text('ΔΗΜΙΟΥΡΓΙΕΣ');
      $('#work-list-1').text('Όλα');
      $('#work-list-2').text('Γάμοι');
      $('#work-list-3').text('Βαφτίσεις');

    /*MAP*/
    $('#map h2').text('ΤΟΠΟΘΕΣΙΑ');
    $('#map h4').html('Κεντρική Πλατεία<br> Βρύσες Αποκορώνου<br> Χανιά<br> 73007');

    /*CONTACT*/
    $('#contact h2').text('ΕΠΙΚΟΙΝΩΝΙΑ');
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


      /*ΗΟΜΕ PAGE*/
      $("#main-menu-li-0").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Home'
      $("#main-menu-li-1").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Our Story'
      $("#main-menu-li-2").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Creations'
      $("#main-menu-li-3").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Location'
      $("#main-menu-li-4").contents().filter(function(){
        return this.nodeType == 3;
      })[0].nodeValue = 'Contact'
      //$('#main-menu-li-1').text('Το Ανθοπωλείο');
      $('#main-menu ul').animate({
        left: "31%"
      },0);
      $('#main-header h4').text('Bonsai is a local flower shop in Vryses Apokoronou. Since 1992 we continue to provide fresh and creative flower designs!');
      /*MAP*/
      $('#work h2').text('CREATIONS');
      $('#work-list-1').text('All Ceremonies');
      $('#work-list-2').text('Weddings');
      $('#work-list-3').text('Baptisms');

      /*OUR STORY*/
      $('.about-text h2').text('OUR STORY');
      $('#about-description').text('Established in 1992 a flower shop first of its kind in the area. We continue to provide for the customer’s needs with fresh and high quality blooms. More than 25 years of experience beautifying your special moments with flower design making events memorable. Let your dream days be realised through the most creative way!');

    /*MAP*/
    $('#map h2').text('LOCATION');
    $('#map h4').html('Central Square<br> Vryses Apokoronou<br> Chania, Crete<br> 73007');

    /*CONTACT*/
    $('#contact h2').text('CONTACT');
    $('#fname-label').text('First Name');
    $('#fname').attr("placeholder", 'First Name');
    $('#lname-label').text('Last Name');
    $('#lname').attr("placeholder", "Last Name");
    $('#message').text('Message');
    $('#subject').attr("placeholder",'Message');
    $('#submit').attr("value", "Submit");

      this.langState="en";
    }
  }
}
