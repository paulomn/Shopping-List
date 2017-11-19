import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://shopping-list-d8c53.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());                           
    }

    getRecipes() {       
        const token = this.authService.getToken();
        return this.http.get('https://shopping-list-d8c53.firebaseio.com/recipes.json?auth=' + token)
        .subscribe((response: Response) => {
            const recipes: Recipe[] = response.json();
            this.recipeService.setRecipes(recipes);
        });       
    }
}