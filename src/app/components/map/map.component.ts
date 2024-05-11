import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { enviroments } from '../../../enviroments/enviroments';
import { MapService } from '../../services/ExtServices/map.service';
import { business } from '../../model/business';
import { ClientService } from '../../services/user/client.service';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  business:business[]=[];
  constructor(private map:MapService, private clientService:ClientService){}
  ngOnInit(): void {
    this.map.crearMapa();
    this.map.agregarMarcador().subscribe((marcador)=>{
      console.log(marcador.lat +"-"+marcador.lng);
    });
    this.clientService.getAllBusiness().subscribe({
      next:(data)=>{
        if (data && data.respuesta && Array.isArray(data.respuesta)) {
          this.business = data.respuesta;
        } else {
          console.error('La respuesta del servidor no tiene el formato esperado:', data);
        }
      },
      error:(error1)=>{
        console.log(error1);
      }
    });
    this.map.pintarMarcadores(this.business);
  }
 
}
