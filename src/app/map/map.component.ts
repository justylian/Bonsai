import { Component, OnInit } from '@angular/core';
import Map from 'ol/map';
import View from 'ol/View';
import Feature from 'ol/Feature';

import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import {defaults as defaultInteractions, MouseWheelZoom} from 'ol/interaction.js';
import Point from 'ol/geom/Point';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public constructor() {

  }

  public ngOnInit() {
    const markerSource = new VectorSource();

    var markerStyle = new Style({
      image: new Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: "../../assets/images/background/marker.png"
      }))
    });



    let map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),

      new VectorLayer({
        source: markerSource,
        style: markerStyle,
      })
    ],
      view: new View({
        center: olProj.fromLonLat([24.3, 35.40]),
        zoom: 10
      }),
      //interactions: ol.interaction.defaults({mouseWheelZoom:false}),
      interactions: defaultInteractions({mouseWheelZoom: false}),


    });


      console.log('lon:');
      console.log('lat:');

      var iconFeatures = [];

      var iconFeature = new Feature({
        geometry: new Point(olProj.transform([24.201062, 35.375429], 'EPSG:4326',
          'EPSG:3857')),
        name: 'Null Island',
        population: 4000,
        rainfall: 500
      });

      markerSource.addFeature(iconFeature);









  }


 }
