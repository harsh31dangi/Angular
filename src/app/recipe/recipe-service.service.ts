import { Injectable, Output} from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  addToShoppingList = new Subject<Ingredient[]>();
  recipeChanged = new Subject();
  constructor() { }

  // private recipes: Recipe[] = [
  //   new Recipe("A Test Recipe",
  //   "This is simply a test",
  //   "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
  //   [
  //     new Ingredient('Bread',10),
  //     new Ingredient('Butter',2)
  //   ]),
  //   new Recipe("A Test Recipe1",
  //   "This is simply a test",
  //   "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
  //   [
  //     new Ingredient('Bun',3),
  //     new Ingredient('Cheese',6)
  //   ])
  // ];

  private recipes : Recipe[] = [];

  getRecipes(){
    return this.recipes.slice();              //returns a copy of recipes array, so that no change is done on this array.
  }

  setRecipes(recipes : Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice() );
  }

  getRecipebyId(id: number){
    return this.recipes[id];
  }

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    console.log(recipe)
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index : number, recipe : Recipe){
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index : number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
