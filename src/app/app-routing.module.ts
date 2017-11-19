import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { BlankRecipeComponent } from './recipes/blank-recipe/blank-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, 
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: BlankRecipeComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] } 
        ] 
    }, 
    { path: 'shopping', component: ShoppingListComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
  ]
  
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
