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

export const routes: Routes = [
    {
        path:'', component:LoginComponent, canActivate:[LoginGuard]
    },{
        path:'signup', component:SignUpComponent, canActivate:[LoginGuard]
    },{
        path:'forgot-password', component:PasswordRecoveryComponent, canActivate:[LoginGuard]
    },{
        path:'home', component:HomeComponent, children:[
            {
                path:'setting-account', component:AccountSettingComponent 
            },
            {
                path:'map', component:MapComponent
            },{
                path:'list-business' , component:ListBusinessComponent ,
            },{
                path:'create-business', component:CreateBusinessComponent
            },{
                path:'business-details/:idBusiness', component:BusinessDatailComponent
            }
        ]
    },
    {
        path:'change-password', component:ChangePasswordComponent
    }

];
