import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth-service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  
  constructor(private _authService: AuthService) {}
  
  ngOnInit() {
    this._authService.autoLogin();
  }
  
}
