(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
class Ingredient {
    // public name: string;
    // public amount: number;
    // constructor(name,amount){
    //     this.name=name;
    //     this.amount=amount;
    // }
    // below contriuctor will do the same work as above lines.....
    //it will automatically assign the values to name and amount
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ "./src/app/shopping-list/shopping-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-service.service.ts ***!
  \***********************************************************/
/*! exports provided: ShoppingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingServiceService", function() { return ShoppingServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _recipe_recipe_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe/recipe-service.service */ "./src/app/recipe/recipe-service.service.ts");





class ShoppingServiceService {
    constructor(recipeService) {
        this.recipeService = recipeService;
        this.ingredientAdded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Apples", 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Tomatoes", 10)
        ];
    }
    ngOnInit() {
    }
    getIngredient() {
        return this.ingredients.slice();
    }
    getIngredientByIndex(index) {
        return this.ingredients[index];
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }
    updateIngredient(index, ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientAdded.next(this.ingredients.slice());
    }
    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientAdded.next(this.ingredients.slice());
    }
    addIngredientsFromRecipe(ing) {
        // for(let i of ing){
        //   this.ingredients.push(i);
        // }
        this.ingredients.push(...ing); //another method to push whole array to another arr
        this.ingredientAdded.next(this.ingredients.slice());
    }
}
ShoppingServiceService.ɵfac = function ShoppingServiceService_Factory(t) { return new (t || ShoppingServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_recipe_recipe_service_service__WEBPACK_IMPORTED_MODULE_3__["RecipeServiceService"])); };
ShoppingServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShoppingServiceService, factory: ShoppingServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _recipe_recipe_service_service__WEBPACK_IMPORTED_MODULE_3__["RecipeServiceService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map