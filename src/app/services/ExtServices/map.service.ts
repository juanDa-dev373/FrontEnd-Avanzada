import { Injectable } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { BusinessDTO } from '../../dto/businessDTO';
import { enviroments } from '../../../enviroments/enviroments';
import { Business } from '../../model/business';


@Injectable({
  providedIn: 'root'
})
export class MapService {

    mapa: any;
    style: string = 'mapbox://styles/mapbox/streets-v11';
    directions: any;
    marcadores: any[];
    constructor() {
    mapboxgl.accessToken = enviroments.accessToken;
    this.marcadores = [];
    }
    public crearMapa() {
      this.mapa = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        center: [-72.309, 4.473],
        zoom: 4.5
      });
      this.mapa.addControl(new mapboxgl.NavigationControl());
      this.mapa.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: { enableHighAccuracy: true },
          trackUserLocation: true
        })
      );
    }
    public agregarMarcador():Observable<any> {
      const mapaGlobal = this.mapa;
      const marcadores = this.marcadores;
      return new Observable<any>(observer => {
        mapaGlobal.on('click', function (e:any) {
          marcadores.forEach(marcador => marcador.remove());
          const marcador = new mapboxgl.Marker()
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(mapaGlobal);
          marcadores.push(marcador);
          observer.next(marcador.getLngLat());
        });
      });
    }
    public pintarMarcadores(business: Business[]) {
      business.forEach(business => {
        new mapboxgl.Marker()
        .setLngLat([business.location.longitude, business.location.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(business.name))
        .addTo(this.mapa);
      });
    }

}
