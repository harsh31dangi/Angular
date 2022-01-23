import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService : DataStorageService, private authService : AuthService) { }
  isAuthenticated = false;

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = user ? true : false;
    })
  }

  storeRecipes(){
    this.dataStorageService.storeRecipes();
  }

  fetchRecipes(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
