import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { enviroments } from '../../../enviroments/enviroments';
import { MapService } from '../../services/ExtServices/map.service';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  constructor(private map:MapService){}
  ngOnInit(): void {
    this.map.crearMapa();
  }
 
}
