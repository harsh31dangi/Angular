import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingServiceService } from '../shopping-service.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild("form", { static : false}) form : NgForm;

  subscription : Subscription;
  editMode = false;
  editItemIndex : number;
  editedItem : Ingredient;

  constructor(private shoppingService : ShoppingServiceService) { }

  ngOnInit(): void {
    this.subscription =  this.shoppingService.startedEditing.subscribe(
      (index : number) => {
       this.editMode = true; 
       this.editItemIndex = index;
       this.editedItem = this.shoppingService.getIngredientByIndex(index);
       this.form.setValue({
         name : this.editedItem.name,
         amount : this.editedItem.amount
       })
      }
    );
  }

  onAddIngredient(form : NgForm){
    const value = form.value;
    const ingredient = new Ingredient(value.name,value.amount);
    if(this.editMode === true){
      this.shoppingService.updateIngredient(this.editItemIndex, ingredient);
    }
    else{
      this.shoppingService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.editMode=false;
    this.form.reset();
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
