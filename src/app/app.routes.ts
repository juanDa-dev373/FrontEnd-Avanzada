import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { HomeComponent } from './components/home/home.component';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { MapComponent } from './components/map/map.component';
import { ListBusinessComponent } from './components/list-business/list-business.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginGuard } from './services/guards/permissions.service';
import { RolesGuard } from './services/guards/roles.service';
import { CreateBusinessComponent } from './components/create-business/create-business.component';
import { BusinessDatailComponent } from './components/business-datail/business-datail.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { IndexComponent } from './components/index/index.component';
import { UpdateBusinessComponent } from './components/update-business/update-business.component';

export const routes: Routes = [
    {
        path:'', component:IndexComponent, canActivate:[LoginGuard]
    },{
        path:'login', component:LoginComponent, canActivate:[LoginGuard]
    },{
        path:'signup', component:SignUpComponent, canActivate:[LoginGuard]
    },{
        path:'forgot-password', component:PasswordRecoveryComponent, canActivate:[LoginGuard]
    },{
        path:'home', component:HomeComponent, children:[
            {
                path:'setting-account', component:AccountSettingComponent 
            },{
                path:'map', component:MapComponent
            },{
                path:'list-business' , component:ListBusinessComponent ,
            },{
                path:'recommendation' , component:RecommendationComponent ,
            },{
                path:'create-business', component:CreateBusinessComponent
            },{
                path:'business-details/:idBusiness', component:BusinessDatailComponent
            },{
                path:'update-business/:idBusiness', component:UpdateBusinessComponent
            }

        ]
    },
    {
        path:'change-password', component:ChangePasswordComponent
    },{
        path: "**", pathMatch: "full", redirectTo: "",canActivate:[LoginGuard]
    }

];
