import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is simply a test 1', 'http://www.howtocookgourmet.com/wp-content/uploads/2017/06/grilled-flat-iron-steak-with-charred-tomato-relish-sl-900x640.jpg',
    [new Ingredient('Meat', 1), new Ingredient('Bread', 2) ]),
        new Recipe('A test recipe 2', 'This is simply a test 2', 'https://www.kowalskis.com/sites/default/files/styles/node_recipe_meal_full_large/public/2017-09/chicken-wings-with-angry-sauce.jpg?h=5ad15dfb&itok=aLoP19mZ',
    [new Ingredient('Mangos', 2), new Ingredient('Salt', 10) ]),
        ];

    constructor(private shoppingListService: ShoppingListService) {}
    
    getRecipes() {
        //Return a copy and not a reference
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}