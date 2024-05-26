import { Injectable } from '@angular/core';
import  mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { enviroments } from '../../../enviroments/enviroments';
import { Business } from '../../model/Business';
import { CarouselComponent } from '../../components/carousel/carousel.component';


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
        center: [ -75.68111, 4.53389],
        zoom: 12
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
    public pintarMarcadores(business:any[]) {
      business.forEach(business => {
        new mapboxgl.Marker()
        .setLngLat([business.location.longitude,business.location.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div>
            <div style="display:flex; justify-content: center; align-items: center;">${business.name}</div>
            <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                ${business.images.map((_:any, index:any) => `
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : ''}" aria-label="Slide ${index + 1}"></button>
              `).join('')}
            </div>
            <div class="carousel-inner">
              ${business.images.map((image:any, index:any) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <img src="${image}" class="d-block w-100" alt="...">
                </div>
              `).join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
      `))
        .addTo(this.mapa);
      });
    }

}
