import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import {defaults as defaultInteractions, MouseWheelZoom} from 'ol/interaction.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public constructor() {

  }

  public ngOnInit() {
    let map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([24.3, 35.40]),
        zoom: 11
      }),
      //interactions: ol.interaction.defaults({mouseWheelZoom:false}),
      interactions: defaultInteractions({mouseWheelZoom: false}),


    });





  }


 }
