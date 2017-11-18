import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    ingredientChanged = new Subject<Ingredient[]>();
    editStarted = new Subject<number>();

    private ingredients = [
        
            new Ingredient('Apples', 5), 
            new Ingredient('Tomatoes', 10)
        
            ];

    getIngredients() {
        //Return a copy and not a reference
        return this.ingredients.slice();
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

}