import { Injectable, inject } from '@angular/core';
import { TokenServicesService } from '../ExtServices/token-services.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private tokenService:TokenServicesService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.tokenService.isLogged()) {
      this.router.navigate(["index"]);
      return false;
    }
    return true;
  }
}
export const LoginGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state:
  RouterStateSnapshot): boolean => {
  return inject(PermissionsService).canActivate(next, state);
}
