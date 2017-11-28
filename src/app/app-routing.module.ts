import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './components/dashboard/dashboard.component';
import {UsersComponent}      from './components/user-list/users.component';
import {UserDetailComponent}  from './components/user-list/details-user/user-detail.component';
import {UserAddComponent} from './components/user-list/add-user/user-add.component';
import {UserUpdateComponent} from './components/user-list/update-user/user-update.component';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeAddComponent} from './components/recipe-list/add-recipe/recipe-add.component';
import {RecipeUpdateComponent} from './components/recipe-list/update-recipe/recipe-update.component';
import {RecipeDetailComponent} from "./components/recipe-list/details-recipe/recipe-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/user/:id', component: UserDetailComponent},
  {path: 'detail/recipe/:id', component: RecipeDetailComponent},
  {path: 'update/user/:id', component: UserUpdateComponent},
  {path: 'update/recipe/:id', component: RecipeUpdateComponent},
  {path: 'users', component: UsersComponent},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'add-user', component: UserAddComponent},
  {path: 'add-recipe', component: RecipeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
