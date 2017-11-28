// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './components/user-list/users.component';
import {UserDetailComponent} from './components/user-list/details-user/user-detail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserAddComponent} from './components/user-list/add-user/user-add.component';
import {UserUpdateComponent} from './components/user-list/update-user/user-update.component';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeAddComponent} from './components/recipe-list/add-recipe/recipe-add.component';
import {RecipeUpdateComponent} from './components/recipe-list/update-recipe/recipe-update.component';

// Services
import {UserService} from './services/user.service';
import {RecipeService} from './services/recipe.service';
import {RecipeDetailComponent} from "./components/recipe-list/details-recipe/recipe-detail.component";


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    RecipeListComponent,
    RecipeAddComponent,
    RecipeUpdateComponent,
    DashboardComponent,
    RecipeDetailComponent,
    UserAddComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, RecipeService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
