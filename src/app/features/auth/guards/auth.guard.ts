import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const routerService = inject(Router);
  const user = authService.getUser();

  // Check for the JWT Token
  let token = cookieService.get('Authorization');

  if (token && user) {
    token = token.replace('Bearer', '');
    const decodedToken: any = jwt_decode(token);

    // Check if token has expired
    const expirationDate = decodedToken.exp * 1000;
    const currentTime = new Date().getTime();

    if (expirationDate < currentTime) {
      // Logout and after login send them back to the same page
      authService.logout();
      return routerService.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
    } else {
      // Token is valid
      if (user.roles.includes('Writer')) {
        return true;
      } else {
        alert('Unauthorized');
        routerService.navigateByUrl('/');
        return false;
      }
    }
  } else {
    // Logout and after login send them back to the same page
    authService.logout();
    return routerService.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
  }
};
