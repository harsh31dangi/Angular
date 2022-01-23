import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingServiceService } from './shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private igChangeSub : Subscription;

  constructor(private shoppingService : ShoppingServiceService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredient();
    this.igChangeSub = this.shoppingService.ingredientAdded.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  afterIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient)
  }

  onEditItem(index : number){
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy() : void{
    this.igChangeSub.unsubscribe();
  }
}
