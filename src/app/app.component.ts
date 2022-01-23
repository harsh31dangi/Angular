import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'project';
  // recipesCalled = true;
  // shoppingListCalled = false;

  // onOptionSelected(option : string){
  //   if(option == 'recipes'){
  //     this.recipesCalled = true
  //     this.shoppingListCalled = false
  //   }
  //   else{
  //     this.shoppingListCalled = true
  //     this.recipesCalled = false;
  //   }
  // }

  constructor(private authService : AuthService){}

  ngOnInit(){
    this.authService.autoLogin();
  }

}
