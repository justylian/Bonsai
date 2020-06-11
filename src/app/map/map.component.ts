import { Component, OnInit } from '@angular/core';
declare var require: any;
declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   /* var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
    mapboxgl.accessToken =
      "pk.eyJ1IjoieGVuYWtpcyIsImEiOiJjanczdDBpMHAwZWgzM3lrbW9xaDVpNnlzIn0.9O8d2q7A_DUaGbswoygSTA";


      var mymap = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/xenakis/ckbb39k3m09k21iqqjq5uxd00",
        center: [35.375452, 24.201023],
        //pitch: 60,
        zoom: 15
      });*/
  }
 }
