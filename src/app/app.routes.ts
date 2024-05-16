import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { HomeComponent } from './components/home/home.component';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { MapComponent } from './components/map/map.component';
import { ListBusinessComponent } from './components/list-business/list-business.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
export const routes: Routes = [
    {
        path:'', component:IndexComponent
    },
    {
        path:'login', component:LoginComponent
    },{
        path:'signup', component:SignUpComponent
    },{
        path:'forgot-password', component:PasswordRecoveryComponent
    },{
        path:'home', component:HomeComponent, children:[
            {
                path:'setting-account', component:AccountSettingComponent
            },
            {
                path:'map', component:MapComponent
            },{
                path:'list-business', component:ListBusinessComponent
            }
        ]
    },
    {
        path:'change-password', component:ChangePasswordComponent
    }

];
