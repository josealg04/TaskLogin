import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  name = 'anony';

  constructor(private user: UserService, private authService: AuthService) {

  }

  ngOnInit() {
    /*this.name = this.user.username;
    console.log('Esta logueado?', this.user.getUserLoggedIn());*/
  }

  login() {
    this.authService.login('boris', '123456');
  }

  logout() {
    this.authService.logout();
  }

}
