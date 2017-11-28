import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../app.component.css']
})

export class DashboardComponent implements OnInit{
  totalUsers: number;
  totalRecipes: number;

  constructor(private userService: UserService, private recipeService: RecipeService){};

  ngOnInit():void{
    this.userService.getUsers()
      .then(response => this.totalUsers = response.length);
    this.recipeService.getRecipes()
      .then(response => this.totalRecipes = response.length);
  }

}
