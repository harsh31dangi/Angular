import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: []
})
export class RecipeComponent implements OnInit {
  selectedRecipe : Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
