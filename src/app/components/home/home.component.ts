import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideBarComponent } from '../slide-bar/slide-bar.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';
import { SliderBarModeratorComponent } from '../slider-bar-moderator/slider-bar-moderator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SlideBarComponent, RouterModule, FormsModule, CommonModule, SliderBarModeratorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private clientService:ClientService, private routes:Router,private token:TokenServicesService){}
  filtro:string="";
  rol=this.token.getRole();
  ngOnInit(): void {}
  
}
