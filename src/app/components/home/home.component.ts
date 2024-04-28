import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlideBarComponent } from '../slide-bar/slide-bar.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SlideBarComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
