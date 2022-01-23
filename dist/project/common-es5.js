function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/ingredient.model.ts": function srcAppSharedIngredientModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ingredient", function () {
      return Ingredient;
    });

    var Ingredient = // public name: string;
    // public amount: number;
    // constructor(name,amount){
    //     this.name=name;
    //     this.amount=amount;
    // }
    // below contriuctor will do the same work as above lines.....
    //it will automatically assign the values to name and amount
    function Ingredient(name, amount) {
      _classCallCheck(this, Ingredient);

      this.name = name;
      this.amount = amount;
    };
    /***/

  },

  /***/
  "./src/app/shopping-list/shopping-service.service.ts": function srcAppShoppingListShoppingServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingServiceService", function () {
      return ShoppingServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/ingredient.model */
    "./src/app/shared/ingredient.model.ts");
    /* harmony import */


    var _recipe_recipe_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../recipe/recipe-service.service */
    "./src/app/recipe/recipe-service.service.ts");

    var ShoppingServiceService = /*#__PURE__*/function () {
      function ShoppingServiceService(recipeService) {
        _classCallCheck(this, ShoppingServiceService);

        this.recipeService = recipeService;
        this.ingredientAdded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingredients = [new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Apples", 5), new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Tomatoes", 10)];
      }

      _createClass(ShoppingServiceService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getIngredient",
        value: function getIngredient() {
          return this.ingredients.slice();
        }
      }, {
        key: "getIngredientByIndex",
        value: function getIngredientByIndex(index) {
          return this.ingredients[index];
        }
      }, {
        key: "addIngredient",
        value: function addIngredient(ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientAdded.next(this.ingredients.slice());
        }
      }, {
        key: "updateIngredient",
        value: function updateIngredient(index, ingredient) {
          this.ingredients[index] = ingredient;
          this.ingredientAdded.next(this.ingredients.slice());
        }
      }, {
        key: "deleteIngredient",
        value: function deleteIngredient(index) {
          this.ingredients.splice(index, 1);
          this.ingredientAdded.next(this.ingredients.slice());
        }
      }, {
        key: "addIngredientsFromRecipe",
        value: function addIngredientsFromRecipe(ing) {
          var _this$ingredients;

          // for(let i of ing){
          //   this.ingredients.push(i);
          // }
          (_this$ingredients = this.ingredients).push.apply(_this$ingredients, _toConsumableArray(ing)); //another method to push whole array to another arr


          this.ingredientAdded.next(this.ingredients.slice());
        }
      }]);

      return ShoppingServiceService;
    }();

    ShoppingServiceService.ɵfac = function ShoppingServiceService_Factory(t) {
      return new (t || ShoppingServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_recipe_recipe_service_service__WEBPACK_IMPORTED_MODULE_3__["RecipeServiceService"]));
    };

    ShoppingServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShoppingServiceService,
      factory: ShoppingServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _recipe_recipe_service_service__WEBPACK_IMPORTED_MODULE_3__["RecipeServiceService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map