// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  fakeLogin(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      const fakeToken = 'token-falso'; 
      localStorage.setItem('access_token', fakeToken);
      return true;
    }
    return false;
  }

  fakeLogout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
