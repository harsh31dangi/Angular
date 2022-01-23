import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RecipeServiceService } from '../recipe/recipe-service.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService implements OnInit {
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  constructor(private recipeService : RecipeServiceService) { 
  }

  private ingredients : Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ]

  ngOnInit() : void{
    
  }

  getIngredient(){
    return this.ingredients.slice();
  }

  getIngredientByIndex(index : number){
    return this.ingredients[index];
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  updateIngredient(index : number, ingredient : Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index : number){
    this.ingredients.splice(index,1)
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ing : Ingredient[]){
    // for(let i of ing){
    //   this.ingredients.push(i);
    // }
    this.ingredients.push(...ing);           //another method to push whole array to another arr
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
