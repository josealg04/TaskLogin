import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isExpanded = false;

  collapse() {
      this.isExpanded = false;
  }

  toggle() {
      this.isExpanded = !this.isExpanded;
  }

  
  constructor(private authService: AuthService) { }

  ngOnInit(){

  }

  userName(): string {
      return this.authService.getUserName();
  }

  public isAuthenticated(): boolean
  {
      return this.authService.isAuthenticated();
  }

  isAuthenticatedRole(role: string): boolean {
      
      if (this.isAuthenticated && role != null ) {
          return this.authService.hasRole(role);
      }
  }

  
  logout() {
    this.authService.logout();
  }

}
