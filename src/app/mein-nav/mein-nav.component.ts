import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mein-nav',
  templateUrl: './mein-nav.component.html',
  styleUrls: ['./mein-nav.component.scss']
})
export class MeinNavComponent {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>()

  constructor(private authService: AuthService) { }

  public ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn()
  }

  public logout() {
    this.authService.logout()
  }

}
