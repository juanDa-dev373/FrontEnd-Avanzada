import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
export const routes: Routes = [
    {
        path:'', component:LoginComponent
    },{
        path:'signup', component:SignUpComponent
    },{
        path:'forgot-password', component:PasswordRecoveryComponent
    }
];
