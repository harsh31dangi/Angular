import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AuthInterceptorService } from './auth/auth-intercepter.service';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipeModule } from './recipe/recipe.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // AuthModule,     //due to lazy loading
    //RecipeModule,    //we are lazy loading recipeModule thats why wedont import it here, otherwise it would be eager loading
    // ShoppingListModule,   //due to lazy loading
    SharedModule
  ],
  providers: [{
              provide : HTTP_INTERCEPTORS, 
              useClass : AuthInterceptorService,
              multi: true 
            }],
  bootstrap: [AppComponent]
})
export class AppModule { }
