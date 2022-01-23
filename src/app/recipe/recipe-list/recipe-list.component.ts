import { Component,  OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[];
  isLoading = false;
  constructor(private recipeService : RecipeServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe(
      (recipes : Recipe[]) =>{
        this.recipes = recipes;
      }
    )
    this.isLoading = false;
  }
}
