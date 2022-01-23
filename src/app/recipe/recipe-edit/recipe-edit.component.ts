import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;
  recipeForm : FormGroup;
  constructor(private route : ActivatedRoute,
              private recipeService : RecipeServiceService,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );
    console.log("Onsubmit" + newRecipe);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe);
    }
    else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['../'],{relativeTo : this.route});
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[0-9]+[0-9]*$/)
        ])
      })
    )
  }

  onRemoveControl(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm(){
    let recipeName = '';
    let recipeImgPath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipebyId(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      description = recipe.description;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name' : new FormControl(ing.name, Validators.required),
              'amount' : new FormControl(ing.amount, [
                Validators.required,
                Validators.pattern(/^[0-9]+[0-9]*$/)
              ])
            })
          )
        }
      }  
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImgPath, Validators.required),
      'description' : new FormControl(description, Validators.required),
      'ingredients' : ingredients
    })
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
