import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {path : '', redirectTo : '/recipes' , pathMatch : 'full'},
  {path : 'recipes', loadChildren : () => import('./recipe/recipe.module').then(m => m.RecipeModule)}, //this is used to implement lazy loading, give the path of the module.ts file of the module and then # then modulename,
                                                                                // when recipes path is encountered then angular will load the module
  {path : 'shopping-list' ,loadChildren : () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
  {path : 'auth', loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy : PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
