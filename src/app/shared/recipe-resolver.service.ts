import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipe/recipe-list/recipe.model';
import { RecipeServiceService } from '../recipe/recipe-service.service';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService : DataStorageService, private recipeService : RecipeServiceService) { }

  resolve(){
    const recipes = this.recipeService.getRecipes();
    if(recipes.length === 0)
      return this.dataStorageService.fetchRecipes(); //no need to subscribe here because resolve method will do it for us
    else
      return recipes;
  }
}
