import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      // Establece tu token de Mapbox aquí
      mapboxgl.accessToken = 'pk.eyJ1IjoianVhbmZvbnNlY2EyMDAzIiwiYSI6ImNsdmlweHVxaDFpZmUya21naXF5bnJrdW4ifQ.IANrJ9QI3kdPt2Qlh8vh-g';
  
      const map = new mapboxgl.Map({
        container: 'container-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-75.68111,4.53389], // Longitud y latitud del centro del mapa
        zoom: 9 // Zoom inicial
      });
    }else{
      console.log('el documento no se encontro')
    }
  }
}
