import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingServiceService } from 'src/app/shopping-list/shopping-service.service';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  id : number;
  constructor(private shoppingService : ShoppingServiceService,
              private recipeServie : RecipeServiceService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id']
        this.recipe = this.recipeServie.getRecipebyId(this.id);
      }
    )
  }

  toShoppingList(){
    this.shoppingService.addIngredientsFromRecipe(this.recipe.ingredients);
  }

  deleteRecipe(){
    this.recipeServie.deleteRecipe(this.id);
    this.router.navigate(['recipes'])
  }

}
