import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideBarComponent } from '../slide-bar/slide-bar.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { client } from '../../model/client';
import { ClientService } from '../../services/user/client.service';
import { accountDetailDTO } from '../../dto/accountDetailDTO';
import { SlideBarComponent } from '../slide-bar/slide-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SlideBarComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private clientService:ClientService, private routes:Router){}
  ngOnInit(): void {}
  
}
