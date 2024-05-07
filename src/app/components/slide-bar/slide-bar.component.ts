import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { business } from '../../model/business';
import { ClientService } from '../../services/user/client.service';
import { TokenServicesService } from '../../services/ExtServices/token-services.service';


@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.css'
})
export class SlideBarComponent implements OnInit{
  business:business[]=[];
  constructor(private clientService:ClientService, private local:TokenServicesService){}
  ngOnInit(): void {
      if(this.local.getToken()!==null){
        this.clientService.getAllBusiness().subscribe({
          next:(data)=>{
            this.business = data;
          },
          error:(error1)=>{
            console.log(error1);
          }
        });
      }else{
        console.log("el localStorage es null");
      }
    }

}
