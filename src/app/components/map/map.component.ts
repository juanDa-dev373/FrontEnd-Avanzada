import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { enviroments } from '../../../enviroments/enviroments';
import { MapService } from '../../services/ExtServices/map.service';
import { Business } from '../../model/Business';
import { ClientService } from '../../services/user/client.service';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  business:any[]=[];
  constructor(private map:MapService, private clientService:ClientService){}
  ngOnInit(): void {
    this.map.crearMapa();
    this.clientService.getAllBusiness().subscribe({
      next:(data)=>{
        this.business=data.respuesta;
        this.map.pintarMarcadores(this.business);
      },
      error:(error1)=>{
        console.log(error1);
      }
    });
  }
 
}
