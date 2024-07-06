import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private router: Router) { }

  public logout() {
    console.log('log out from service')
    this.loggedIn.next(false)
    this.router.navigate(['/login'])
  }

  public login(user: string) {
    console.log('log in with user =', user)
    this.loggedIn.next(true);
    this.router.navigate(['/home'])
  }

  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }

}
